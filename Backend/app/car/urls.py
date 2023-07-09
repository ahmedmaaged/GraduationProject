"""
URL mapping for the car app.
"""
from django.urls import (
    path,
    include,
)

from rest_framework.routers import DefaultRouter

from car import views


router = DefaultRouter()
router.register('cars', views.CarViewSet)

app_name = 'car'

urlpatterns = [
    path('', include(router.urls)),
]