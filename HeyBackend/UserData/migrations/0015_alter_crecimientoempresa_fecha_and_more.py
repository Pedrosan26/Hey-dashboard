# Generated by Django 4.2.4 on 2024-05-05 08:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserData', '0014_alter_crecimientoempresa_fecha_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crecimientoempresa',
            name='fecha',
            field=models.DateField(default=datetime.date(2024, 5, 5)),
        ),
        migrations.AlterField(
            model_name='usuarioegresos',
            name='cantidad',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='usuarioegresos',
            name='fecha',
            field=models.DateField(default=datetime.date(2024, 5, 5)),
        ),
        migrations.AlterField(
            model_name='usuarioingresos',
            name='cantidad',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='usuarioingresos',
            name='fecha',
            field=models.DateField(default=datetime.date(2024, 5, 5)),
        ),
    ]
