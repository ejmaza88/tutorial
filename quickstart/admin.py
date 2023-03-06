from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin
from quickstart.models import Category, Baby, Diaper, Formula, Expressed


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
    list_display = ('name', 'new_item',)
    search_fields = ('name',)


@admin.register(Baby)
class BabyAdmin(admin.ModelAdmin):
    list_display = ("name", "dob", "time_of_birth", "due_day",)
    search_fields = ('name',)


@admin.register(Diaper)
class DiaperAdmin(ArchivedModelAdmin):
    list_display = ("get_status_display", "baby",)


@admin.register(Formula)
class FormulaAdmin(ArchivedModelAdmin):
    list_display = ("amount", "baby",)


@admin.register(Expressed)
class ExpressedAdmin(ArchivedModelAdmin):
    list_display = ("amount", "baby",)
