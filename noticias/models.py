from django.db import models
import datetime

class Notice(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    image = models.ImageField(upload_to="noticias/images")
    date = models.DateField(datetime.date.today)