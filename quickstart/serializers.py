from django.contrib.auth.models import User, Group
from quickstart.models import Category

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # exclude = ("password", "groups", "user_permissions")
        fields = (
            "id",
            "is_superuser",
            "username",
            "first_name",
            "last_name",
            "email",
            "is_staff",
            "is_active",
        )
        read_only_fields = fields


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Category
        fields = (
            "id",
            "username",
            "timestamp",
            "name",
            "new_item",
            "user"
        )
        read_only_fields = fields
