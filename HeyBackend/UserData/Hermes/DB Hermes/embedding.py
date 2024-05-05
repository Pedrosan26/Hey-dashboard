import time
from config import api_key_AI, api_key_PINE
import pandas as pd
from openai import OpenAI
from embedding import embed
from pinecone import Pinecone
from pinecone import ServerlessSpec
from datasets import load_dataset
from tqdm.auto import tqdm


def read_csv(file):
    #Read HeyBanco data Set
    tweets=pd.read_csv(file)

    #Obtain the tweets from the data Set
    tweet=tweets['tweet']

    #PRUEBA 10 TWEETS
    first_10_tweets = tweet.head(10)

    #return the dataSet cleaned
    return first_10_tweets

#def processarDatos(tweet):

def main():
    file = "Datathon 2024 - Reto Hey - Dataset Público - Sheet1.csv"
    tweets = read_csv(file)
    embedList = []
    for tweet in tweets:
        embedList.append(tweet)

    client = OpenAI(api_key=api_key_AI)

    MODEL = "text-embedding-3-small"

    res = client.embeddings.create(
        input=[
            tweet,
            "La siguiente oracion es un comentario retroalimentando a una marca, identifica el sentimiento de este y si es positivo o negativo"
        ], model=MODEL
    )

    embeds = [record.embedding for record in res.data]
    
    pc = Pinecone(api_key=api_key_PINE)

    spec = ServerlessSpec(cloud="aws", region="us-east-1")

    index_name = 'semantic-search-openai'

    if index_name not in pc.list_indexes().names():
        # if does not exist, create index
        pc.create_index(
            index_name,
            dimension=len(embed()),  # dimensionality of text-embed-3-small
            metric='dotproduct',
            spec=spec
        )
    # wait for index to be initialized
    while not pc.describe_index(index_name).status['ready']:
        time.sleep(1)

    # connect to index
    index = pc.Index(index_name)
    time.sleep(1)
    # view index stats
    index.describe_index_stats()

    # load the first 1K rows of the TREC dataset
    trec = load_dataset('trec', split='train[:1000]')

    count = 0  # we'll use the count to create unique IDs
    batch_size = 32  # process everything in batches of 32
    for i in tqdm(range(0, len(trec['text']), batch_size)):
        # set end position of batch
        i_end = min(i+batch_size, len(trec['text']))
        # get batch of lines and IDs
        lines_batch = trec['text'][i: i+batch_size]
        ids_batch = [str(n) for n in range(i, i_end)]
        # create embeddings
        res = client.embeddings.create(input=lines_batch, model=MODEL)
        embeds = [record.embedding for record in res.data]
        # prep metadata and upsert batch
        meta = [{'text': line} for line in lines_batch]
        to_upsert = zip(ids_batch, embeds, meta)
        # upsert to Pinecone
        index.upsert(vectors=list(to_upsert))

main()
