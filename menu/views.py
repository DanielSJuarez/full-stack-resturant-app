from django.shortcuts import render
from rest_framework import generics
from .models import MenuItem, OrderList
from .serializers import MenuSerializers, OrderSerializers

# Create your views here.
class MenuListAPIView(generics.ListAPIView):
    queryset = MenuItem.objects.all() 
    serializer_class = MenuSerializers

class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset = OrderList.objects.all() 
    serializer_class = OrderSerializers

class ActiveOrderReview(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderList.objects.all()
    serializer_class = OrderSerializers


    