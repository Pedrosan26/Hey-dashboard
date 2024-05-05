import openai
import config
import requests
import json


def inversiones():
    # Configuramos la llave para usar openAI
    openai.api_key=config.api_key

    # Obtenemos los resultados de los inversionistas
    response=requests.get("http://10.22.203.32:8000/api/Inversiones/")
    inversionistas=[]

    # Inicializamos el objeto 
    inversor = 0
    empresa = 0
    acciones = 0
    inversionInicial = 0
    inversionActual = 0
    inversionResultante = 0

    # Obtenemos la informacion de nuestra api con los campos solicitados
    for investor in response.json():
        inversor = investor['inversor']
        empresa = investor['empresa']
        acciones = investor['acciones']
        inversionInicial = investor['inversionInicial']
        inversionActual = investor['inversionActual']
        inversionResultante = investor['inversionResultante']

        inversionistas.append(investor)

    i=0
    results = []

    # Creacion del propmt de acuerdo al numero de inversiones
    while i < len(inversionistas):
        prompt=(f"""Eres un sistema que da resumenes a sus usuarios, el cliente tiene en su portafolio {acciones} inversiones actualmente, de las cuales
                su capital inicial es de {inversionInicial}, del cual termino con un resultado de {inversionResultante}, este valor quiero que le saques el porcentaje de rendimiento, por ultimo, menciona el valor de la accion , que es de {inversionActual}. 
                haz un resumen general con esa informacion, haciendo ENFASIS en el rendimiento. Quiero que porfavor no pongas formulas dentro del resumen, solo el resultado. 

                Si gustas puedes seguir el siguiente template : 
                -dato
                -dato
                -dato
                -dato

                explica la situacion actual, y recomiende una estrategia de acuerdo al rendimiento
                """)
        # Creamos el chat el cual existira la comunicacion
        response= openai.chat.completions.create(model="gpt-3.5-turbo-0125",
                                                    messages=[{"role": "user","content":prompt}])
        
        i+=1
        results.append(response.choices[0].message.content)

    return results
        
def main():
    inversion=inversiones()
    inversion_str=str(inversion)
    inversion_str=inversion_str.replace('\\n','')
    print(requests.post(f"http://10.22.203.32:8000/api/{inversion_str}"))
    print(" ")

if __name__ =="__main__":
    main()