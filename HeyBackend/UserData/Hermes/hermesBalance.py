import openai
import config
import requests
import hermesInversion as resumenInversion

def egresos():

    #usamos la llave para la API
    openai.api_key=config.api_key


    #obtenemos los resultados
    response=requests.get("http://10.22.203.32:8000/api/EgresosUsuario/")
    #inicializamos los datos que agregaremos al arreglo
    gastos=[]
    

    #iteramos por cada egreso
    for egresos in response.json():        
        # gastos.append(egresos)
        egreso=egresos['gasto']
        total=egresos['cantidad']
        gastos.append({'gasto': egreso, 'total': total})    
    i=0
    results = []

    while i < len(gastos):
        prompt = f"""Quiero que me hagas un resumen sobre los gastos/ egresos de esta persona , un desglos general, si puedes hacer enfasis en el motivo que mas gasto, al igual que los gastos que son recurrentes.
Aquí están los gastos: {gastos}, porfvor, traata de no explicar la cantidad de dinero, solo los gastos mas recuerrentes junto con las mas recurrentes, evite ser repetitivo a toda costa. """
        response= openai.chat.completions.create(model="gpt-3.5-turbo-0125",
                                                    messages=[{"role": "user","content":prompt}])
        
        i+=1
        results.append(response.choices[0].message.content)
        
        return results
    
    
    
def ingresos():
    #usamos la llave para la API
    openai.api_key=config.api_key


    #obtenemos los resultados
    response=requests.get("http://10.22.203.32:8000/api/IngresosUsuario/")
    #inicializamos los datos que agregaremos al arreglo
    ingresos=[]
    

    #iteramos por cada egreso
    for ingreso in response.json():        
        # ingresos.append(egresos)
        ingreso=ingreso['cantidad']
        ingresos.append({'ingreso': ingreso})    
    i=0
    results = []

    while i < len(ingresos):
        prompt = f"""Quiero que me hagas un resumen del ingreso que recive, solo habla de la cantidad de dinero que tiene, si vez que es una cantidad alta, puedes ofrecerle usar ese dinero para empezar a invertir, o recmoendar a los del banco a utilizar ese dinero en inversiones con ellos, la cantidad es {ingresos} """
        response= openai.chat.completions.create(model="gpt-3.5-turbo-0125",
                                                    messages=[{"role": "user","content":prompt}])
        
        i+=1
        results.append(response.choices[0].message.content)
        
        return results

def main():
    egreso=egresos()
    egreso_str=str(egreso)
    

    print(" ")
    ingreso=ingresos()
    ingreso_str=str(ingreso)    
    ingreso_str=ingreso_str.replace("\\n",'')
    print(requests.post(f"http://10.22.203.32:8000/api/{egreso_str}/{ingreso_str}"))
    

if __name__ == "__main__":
    main()