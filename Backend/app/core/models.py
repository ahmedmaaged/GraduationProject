"""
Database models.
"""
import uuid
import os

from django.conf import settings
from django.db import models
from datetime import datetime
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


def car_image_file_path(instance, filename):
    """Generate file path for new recipe image."""
    ext = os.path.splitext(filename)[1]
    filename = f'{uuid.uuid4()}{ext}'

    return os.path.join('uploads', 'car', filename)


class UserManager(BaseUserManager):
    """Manage fr users."""

    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create and return a new superuser."""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class Car(models.Model):
    """Car objects"""
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    car_title = models.CharField(max_length=255)
    color = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    condition = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to=car_image_file_path, blank=True)
    # car_photo_1 = models.ImageField(upload_to=car_image_file_path, blank=True)
    # car_photo_2 = models.ImageField(upload_to=car_image_file_path, blank=True)
    # car_photo_3 = models.ImageField(upload_to=car_image_file_path, blank=True)
    # car_photo_4 = models.ImageField(upload_to=car_image_file_path, blank=True)
    engine = models.CharField(max_length=100)
    transmission = models.CharField(max_length=100)
    kms = models.IntegerField()
    fuel_type = models.CharField(max_length=50)
    created_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.car_title
