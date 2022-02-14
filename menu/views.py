from django.shortcuts import render
from rest_framework import generics
from .models import MenuItem
from .serializers import MenuSerializer

# Create your views here.
class MenuListAPIView(generics.ListAPIView):
    queryset = MenuItem.objects.all() 
    serializer_class = MenuSerializer