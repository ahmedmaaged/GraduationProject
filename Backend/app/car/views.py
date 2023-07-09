"""
Views for the recipe APIs.
"""
from drf_spectacular.utils import (
    extend_schema_view,
    extend_schema,
    OpenApiParameter,
    OpenApiTypes,
)
from rest_framework import (
    viewsets,
    mixins,
    status,
)
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import (
    Car,
)
from car import serializers


class CarViewSet(viewsets.ModelViewSet):
    """View for manage car APIs."""
    serializer_class = serializers.CarDetailSerializer
    queryset = Car.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def _params_to_ints(self, qs):
        """Convert a list of strings to integers."""
        return [int(str_id) for str_id in qs.split(',')]

    def get_queryset(self):
        """Retrieving cars for authenticated user."""
        model = self.request.query_params.get('model')
        car_title = self.request.query_params.get('car_title')
        condition = self.request.query_params.get('condition')
        mxprice = self.request.query_params.get('maxprice')
        kms = self.request.query_params.get('maxdistance')
        queryset = self.queryset
        if model:
            queryset = queryset.filter(model__icontains=model)
        if car_title:
            queryset = queryset.filter(car_title__icontains=car_title)
        if condition:
            queryset = queryset.filter(condition__icontains=condition)
        if mxprice:
            mx_price = self._params_to_ints(mxprice)
            queryset = queryset.filter(price__lte=mx_price)
        if kms:
            mx_kms = self._params_to_ints(kms)
            queryset = queryset.filter(kms__lte=mx_kms)


        return queryset.order_by('-id').distinct()

    def get_serializer_class(self):
        """Return the serializer class for request."""
        if self.action == 'list':
            return serializers.CarSerializer
        elif self.action == 'upload_image':
            return serializers.CarImageserializer

        return self.serializer_class

    def perform_create(self, serializer):
        """Create a new recipe."""
        serializer.save(user=self.request.user)

    @action(methods=['POST'], detail=True, url_path='upload_image')
    def upload_image(self, request, pk=None):
        """Upload an image to recipe."""
        car = self.get_object()
        serializer = self.get_serializer(car, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
