# Generated by Django 4.2.4 on 2024-05-05 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserData', '0003_usuarioempresa_inversionactual_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarioempresa',
            name='inversionActual',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='usuarioempresa',
            name='inversionResultante',
            field=models.IntegerField(default=0),
        ),
    ]
