# Generated by Django 4.0.2 on 2022-02-14 20:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='menuitem',
            old_name='title',
            new_name='name',
        ),
    ]