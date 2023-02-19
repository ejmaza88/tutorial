from django.contrib.auth.models import User, Group
from quickstart.models import Category

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ("password", "groups", "user_permissions")


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
