from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    """
    Category Record
    """

    name = models.CharField(max_length=50)
    new_item = models.BooleanField(default=True)
    added = models.DateTimeField(null=True, blank=True)

    timestamp = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['name']

    def __str__(self):
        """Return a human-readable string representing a record"""
        return f'{self.name} ({self.id})'
