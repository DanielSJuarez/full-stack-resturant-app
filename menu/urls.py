from django.urls import path
from .views import MenuListAPIView, OrderListCreateAPIView, ActiveOrderReview

app_name = 'MenuItem'

urlpatterns = [
    path('orders/<int:pk>/', ActiveOrderReview.as_view()),
    path('orders/',OrderListCreateAPIView.as_view(), name='orders_list_create'),
    path('',MenuListAPIView.as_view(), name='menu')
]

