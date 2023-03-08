from django.contrib.auth.models import User, Group
from quickstart.models import Category, Baby, Diaper, Formula, Expressed

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


class BabySerializer(serializers.ModelSerializer):

    class Meta:
        model = Baby
        fields = ("name", "gender", "dob", "time_of_birth", "due_day",)


class DiaperSerializer(serializers.ModelSerializer):

    class Meta:
        model = Diaper
        fields = ("status", "time", "notes",)


class FormulaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Formula
        fields = ("time", "amount", "notes",)


class ExpressedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expressed
        fields = ("time", "amount", "notes",)
