from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import date, datetime

# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length=65)
    contraseña = models.CharField(max_length=10)
    
    def __str__(self):
        return f"{self.nombre}"

class Empresa(models.Model):
    empresa = models.CharField(max_length=65)

    def __str__(self):
        return f"{self.empresa}"

class UsuarioEmpresa(models.Model):
    inversor = models.ForeignKey(Usuario, on_delete= models.CASCADE, related_name="inversion")
    empresa = models.ForeignKey(Empresa, on_delete= models.CASCADE, related_name="negocio")
    inversionInicial = models.IntegerField()
    acciones = models.IntegerField()
    inversionActual = models.IntegerField(default=0)
    inversionResultante = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.empresa} - Inversion inicial: {self.inversionInicial} Profits: {self.inversionResultante}"

class CrecimientoEmpresa(models.Model):
    crecimiento = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField(default=date.today())
    empresa = models.ForeignKey(Empresa, on_delete= models.CASCADE, related_name="resultados")

    def __str__(self):
        return f"{self.empresa}, {self.fecha} - {self.crecimiento}"

class UsuarioEgresos(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete= models.CASCADE, related_name="comprador")
    gasto = models.CharField(max_length=150)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField(default=date.today())
        
    def __str__(self):
        return f"{self.usuario}, {self.gasto} - {self.cantidad} - {self.fecha}"

class UsuarioIngresos(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete= models.CASCADE, related_name="ingresado")
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField(default=date.today())

    def __str__(self):
        return f"{self.usuario}, {self.fecha} - {self.cantidad}"
    
class UsuarioResumenIngresos(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete= models.CASCADE, related_name="ingresadoR")
    resumen = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.usuario}, Resumen de Ingresos"
    
class UsuarioResumenEgresos(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete= models.CASCADE, related_name="egresadoR")
    resumen = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.usuario}, Resumen de Egresos"
    

class UsuarioResumenInversiones(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete= models.CASCADE, related_name="invertidoR")
    resumen = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.usuario}, Resumen de Inversiones"