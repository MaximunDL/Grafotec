# Generated by Django 4.1.5 on 2023-01-27 17:47

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("noticias", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="notice",
            name="date",
            field=models.DateField(verbose_name=datetime.date.today),
        ),
    ]
