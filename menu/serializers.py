from rest_framework import serializers
from .models import MenuItem, OrderList

class MenuSerializers(serializers.ModelSerializer):
    class Meta: 
        model = MenuItem
        fields = '__all__'

class OrderSerializers(serializers.ModelSerializer):
    class Meta: 
        model = OrderList
        fields = '__all__'
        