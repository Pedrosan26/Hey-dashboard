from . import views
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path("", views.index, name="index"),
    path('api/<str:egreso>/<str:ingreso>', views.postIngresosEgresos),
    path('api/<str:inversion>', views.postInversion)
]

urlpatterns = format_suffix_patterns(urlpatterns)