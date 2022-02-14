from rest_framework import serializers
from .model import MenuItem

class MenuSerializers(serializers.ModelSerializer):
    class Meta: 
        model = MenuItem
        fields = '__all__'
        