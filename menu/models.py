from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    catagory = models.CharField(max_length=255)
    quantity = models.IntegerField()
    size = models.CharField(max_length=255)
    url = models.ImageField()

    def __str__(self):
        return self.name

class OrderList(models.Model):
    customer = models.CharField(max_length=255, null=True)
    name = models.JSONField()
    price = models.IntegerField()

    def __str__ (self):
        return self.customer
    

    