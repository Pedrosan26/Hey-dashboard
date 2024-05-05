from rest_framework import serializers
from ..models import UsuarioEmpresa, CrecimientoEmpresa, UsuarioEgresos, UsuarioIngresos, UsuarioResumenEgresos, UsuarioResumenIngresos, UsuarioResumenInversiones

class UsuarioEmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioEmpresa
        fields = ("inversor", "empresa", "acciones", "inversionInicial", "inversionActual", "inversionResultante")

class CrecimientoEmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrecimientoEmpresa
        fields = ("crecimiento", "empresa", "fecha")

class UsuarioEgresosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioEgresos
        fields = ( "usuario", "gasto", "cantidad", "fecha")

class UsuarioIngresosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioIngresos
        fields = ( "usuario", "cantidad", "fecha")

class UsuarioResumenEgresosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioResumenEgresos
        fields = ( "usuario", "resumen")

class UsuarioResumenIngresosSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioResumenIngresos
        fields = ( "usuario", "resumen")

class UsuarioResumenInversionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioResumenInversiones
        fields = ( "usuario", "resumen")
