from django.db import models
from django.contrib.auth.models import User


# Managers
class ArchiveModelVisibleManager(models.Manager):
    def get_queryset(self):
        return super(ArchiveModelVisibleManager, self).get_queryset().filter(archived=False)


class ArchiveModelHiddenManager(models.Manager):
    def get_queryset(self):
        return super(ArchiveModelHiddenManager, self).get_queryset().filter(archived=True)


# Main Models
class ArchiveModel(models.Model):
    """
    For models that will never be deleted, use an archive flag to hide them from normal operations.
    """

    archived = models.BooleanField(default=False)

    # Manager objs
    objects = ArchiveModelVisibleManager()
    archived_objs = ArchiveModelHiddenManager()
    all_objs = models.Manager()

    # Fields
    timestamp = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(ArchiveModel):
    """
    Category Record
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    new_item = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['-timestamp']

    def __str__(self):
        """Return a human-readable string representing a record"""
        return f'{self.name} ({self.id})'
