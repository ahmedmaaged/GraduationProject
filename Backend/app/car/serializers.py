"""
Serializers for recipe APIs
"""
from rest_framework import serializers

from core.models import (
    Car
)


class CarSerializer(serializers.ModelSerializer):
    """Serializer for cars."""

    class Meta:
        model = Car
        fields = [
            'id', 'car_title', 'model', 'year',  'condition', 'price',
            'image', 'kms'
        ]
        read_only_fields = ['id']



class CarDetailSerializer(CarSerializer):
    """Serializer for car detail view."""

    class Meta(CarSerializer.Meta):
        fields = CarSerializer.Meta.fields + [
            'color', 'description', 'engine', 'transmission' , 'fuel_type',
            'created_date',
        ]


class CarImageserializer(serializers.ModelSerializer):
    """Serializer or uploading images to cars."""

    class Meta:
        model = Car
        fields = ['id', 'image']
        read_only_fields = ['id']
        extra_kwargs = {'image': {'required': 'True'}}
