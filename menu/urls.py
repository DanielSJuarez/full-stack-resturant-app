from django.urls import path
from .views import MenuListAPIView

app_name = 'MenuItem'

urlpatterns = [
    path('',MenuListAPIView.as_view(), name='menu')
]