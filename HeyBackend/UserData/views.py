from django.shortcuts import render
from .models import *
from rest_framework.decorators import api_view
import json

# Create your views here.
def index(request):
    usuarios = Usuario.objects.filter()
    for usuario in usuarios:
        inversiones = UsuarioEmpresa.objects.filter(inversor = usuario)
        for inversion in inversiones:
            inversionCrecimiento = CrecimientoEmpresa.objects.filter(empresa = inversion.empresa).order_by("-fecha")[:1]
            inversion.inversionActual = inversion.acciones * inversionCrecimiento[0].crecimiento
            inversion.inversionResultante = inversion.inversionActual - inversion.inversionInicial
            inversion.save()
    return render(request, "UserData/index.html")

@api_view(["POST"])
def postIngresosEgresos(request, egreso, ingreso):
    usuario = Usuario.objects.get()
    resumenEgresos = UsuarioResumenEgresos(usuario = usuario, resumen = egreso)
    resumenEgresos.save()
    resumenIngresos = UsuarioResumenIngresos(usuario = usuario, resumen = ingreso)
    resumenIngresos.save()
    print(egreso)
    print(ingreso)
    return render(request, "UserData/index.html")

@api_view(["POST"])
def postInversion(request, inversion):
    usuario = Usuario.objects.get()
    resumenInversion = UsuarioResumenInversiones(usuario = usuario, resumen = inversion)
    resumenInversion.save()
    print(inversion)
    return render(request, "UserData/index.html")
