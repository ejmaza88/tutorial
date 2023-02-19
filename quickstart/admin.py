from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin
from quickstart.models import Category


# DRF stuff
TokenAdmin.raw_id_fields = ['user']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'new_item')
    search_fields = ('name',)
