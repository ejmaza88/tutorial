from django.urls import path
from quickstart import views

urlpatterns = [
    path('users/', views.ListUsers.as_view(), name="users"),
    path("categories/", views.ListCategories.as_view(), name="categories"),
    path("category/", views.CategoryView.as_view(), name="category"),
]