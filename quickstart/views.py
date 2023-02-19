from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from quickstart.serializers import UserSerializer
from django.shortcuts import get_object_or_404

from quickstart.models import Category
from quickstart.serializers import CategorySerializer

from rest_framework import status


class ListUsers(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    # authentication_classes = [authentication.TokenAuthentication]
    authentication_classes = [authentication.BasicAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        users = User.objects.all()
        serializer = UserSerializer(instance=users, many=True)
        return Response(serializer.data)


class ListCategories(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(instance=categories, many=True)
        context = {
            "categories": serializer.data,
            "success": True
        }
        return Response(context)


class CategoryView(APIView):

    def get(self, request):
        category = get_object_or_404(Category, pk=request.query_params.get("id"))
        context = {
            "category": CategorySerializer(instance=category).data,
            "success": True,
        }
        return Response(context)

    def post(self, request):
        context = {"success": True}
        http_status = status.HTTP_201_CREATED
        serializer = CategorySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            context["category"] = serializer.data
        else:
            context.update({"errors": serializer.errors, "success": False})
            http_status = status.HTTP_400_BAD_REQUEST

        return Response(context, status=http_status)

    def put(self, request):
        context = {"success": True}
        http_status = status.HTTP_200_OK

        category = get_object_or_404(Category, pk=request.data.get("id"))
        serializer = CategorySerializer(instance=category, data=request.data)

        if serializer.is_valid():
            serializer.save()
            context["category"] = serializer.data
        else:
            context.update({"errors": serializer.errors, "success": False})
            http_status = status.HTTP_400_BAD_REQUEST

        return Response(context, status=http_status)

    def delete(self, request):
        context = {"success": True}
        http_status = status.HTTP_204_NO_CONTENT

        category = get_object_or_404(Category, pk=request.data.get("id"))
        category.delete()

        return Response(context, status=http_status)
