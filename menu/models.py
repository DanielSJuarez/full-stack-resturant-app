from django.db import models

# Create your models here.
class MenuItem(models.Model):
    title = models.CharField(max_length=255)
    price = models.IntegerField()
    catagory = models.CharField(max_length=255)
    quantity = models.IntegerField()
    size = models.CharField(max_length=255)
    url = models.ImageField()

