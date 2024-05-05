from django.contrib import admin
from .models import Usuario, Empresa, UsuarioEmpresa, CrecimientoEmpresa, UsuarioEgresos, UsuarioIngresos, UsuarioResumenEgresos, UsuarioResumenIngresos, UsuarioResumenInversiones

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Empresa)
admin.site.register(UsuarioEmpresa)
admin.site.register(CrecimientoEmpresa)
admin.site.register(UsuarioIngresos)
admin.site.register(UsuarioEgresos)
admin.site.register(UsuarioResumenInversiones)
admin.site.register(UsuarioResumenIngresos)
admin.site.register(UsuarioResumenEgresos)