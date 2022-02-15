from django.urls import path
from .views import MenuListAPIView, OrderListCreateAPIView

app_name = 'MenuItem'

urlpatterns = [
    path('orders/',OrderListCreateAPIView.as_view(), name='orders_list_create'),
    path('',MenuListAPIView.as_view(), name='menu')
]