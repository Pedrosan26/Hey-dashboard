from rest_framework import routers
from .views import UsuarioEmpresaViewSet, CrecimientoEmpresaViewSet, UsuarioEgresosViewSet, UsuarioIngresosViewSet, UsuarioResumenInversionesViewSet, UsuarioResumenEgresosViewSet, UsuarioResumenIngresosViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r"Inversiones", UsuarioEmpresaViewSet)
router.register(r"HistorialEmpresa", CrecimientoEmpresaViewSet)
router.register(r"EgresosUsuario", UsuarioEgresosViewSet)
router.register(r"IngresosUsuario", UsuarioIngresosViewSet)
router.register(r"ResumenIngresos", UsuarioResumenIngresosViewSet)
router.register(r"ResumenEgresos", UsuarioResumenEgresosViewSet)
router.register(r"ResumenInversiones", UsuarioResumenInversionesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]