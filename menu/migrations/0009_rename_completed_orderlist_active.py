# Generated by Django 4.0.2 on 2022-02-16 19:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0008_orderlist_completed'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderlist',
            old_name='completed',
            new_name='active',
        ),
    ]
