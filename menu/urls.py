from tkinter import Menu
from django.urls import path
from .views import MenuListAPIView

app_name = 'MenuItem'

urlpatterns = [
    path('',MenuListAPIView.asView(), name='menu')
]