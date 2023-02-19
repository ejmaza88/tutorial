from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin
from quickstart.models import Category


# DRF stuff
TokenAdmin.raw_id_fields = ['user']


class ArchivedModelAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        # Force admin to display all objects including archived
        qs = self.model.all_objs.get_queryset()
        ordering = self.get_ordering(request)
        if ordering:
            qs = qs.order_by(*ordering)
        return qs

    def get_list_display(self, request):
        return list(self.list_display) + ['archived']


@admin.register(Category)
class CategoryAdmin(ArchivedModelAdmin):
    list_display = ('name', 'new_item')
    search_fields = ('name',)
