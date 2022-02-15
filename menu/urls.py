from django.urls import path
from .views import MenuListAPIView, OrderListAPIView

app_name = 'MenuItem'

urlpatterns = [
    path('orders/',OrderListAPIView.as_view(), name='menu'),
    path('',MenuListAPIView.as_view(), name='menu')
]