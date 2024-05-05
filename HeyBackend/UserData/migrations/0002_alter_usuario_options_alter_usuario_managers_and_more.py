# Generated by Django 4.2.4 on 2024-05-04 23:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('UserData', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usuario',
            options={},
        ),
        migrations.AlterModelManagers(
            name='usuario',
            managers=[
            ],
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='date_joined',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='email',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='is_staff',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='is_superuser',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='last_login',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='password',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='user_permissions',
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='username',
        ),
        migrations.AddField(
            model_name='usuario',
            name='contraseña',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usuario',
            name='nombre',
            field=models.CharField(default=1, max_length=65),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='usuarioempresa',
            name='inversor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='inversion', to='UserData.usuario'),
        ),
    ]