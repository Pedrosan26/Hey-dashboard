from rest_framework import viewsets
from rest_framework.decorators import api_view
from ..models import UsuarioEmpresa, CrecimientoEmpresa, UsuarioEgresos, UsuarioIngresos, UsuarioResumenEgresos, UsuarioResumenIngresos, UsuarioResumenInversiones
from .serializer import UsuarioEmpresaSerializer, CrecimientoEmpresaSerializer, UsuarioEgresosSerializer, UsuarioIngresosSerializer, UsuarioResumenInversionesSerializer, UsuarioResumenEgresosSerializer, UsuarioResumenIngresosSerializer
import json

@api_view(["POST"])
def postValores(request, json):
    parseJson = json.parse()

class UsuarioEmpresaViewSet(viewsets.ModelViewSet):
    queryset = UsuarioEmpresa.objects.filter(inversor = 1)
    serializer_class = UsuarioEmpresaSerializer

class CrecimientoEmpresaViewSet(viewsets.ModelViewSet):
    queryset = CrecimientoEmpresa.objects.filter(empresa = 2).order_by("-fecha")
    serializer_class = CrecimientoEmpresaSerializer

class UsuarioEgresosViewSet(viewsets.ModelViewSet):
    queryset = UsuarioEgresos.objects.filter(usuario = 1)
    serializer_class = UsuarioEgresosSerializer

class UsuarioIngresosViewSet(viewsets.ModelViewSet):
    queryset = UsuarioIngresos.objects.filter(usuario = 1)
    serializer_class = UsuarioIngresosSerializer

class UsuarioResumenInversionesViewSet(viewsets.ModelViewSet):
    queryset = UsuarioResumenInversiones.objects.filter(usuario = 1)
    serializer_class = UsuarioResumenInversionesSerializer

class UsuarioResumenEgresosViewSet(viewsets.ModelViewSet):
    queryset = UsuarioResumenEgresos.objects.filter(usuario = 1)
    serializer_class = UsuarioResumenEgresosSerializer

class UsuarioResumenIngresosViewSet(viewsets.ModelViewSet):
    queryset = UsuarioResumenIngresos.objects.filter(usuario = 1)
    serializer_class = UsuarioResumenIngresosSerializer