import uuid

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
class UUIDModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    timestamp = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class ArchiveModel(UUIDModel):
    """
    For models that will never be deleted, use an archive flag to hide them from normal operations.
    """

    archived = models.BooleanField(default=False)

    # Manager objs
    objects = ArchiveModelVisibleManager()
    archived_objs = ArchiveModelHiddenManager()
    all_objs = models.Manager()

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


class Baby(ArchiveModel):
    FEMALE = "f"
    MALE = "m"

    GENDER_CHOICES = (
        (FEMALE, "Female"),
        (MALE, "Male")
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="babies")
    name = models.CharField(max_length=150)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    dob = models.DateField()
    time_of_birth = models.TimeField()
    due_day = models.DateField(null=True)

    class Meta:
        verbose_name_plural = "Babies"

    def __str__(self):
        """Return a human-readable string representing a record"""
        return f'{self.name} ({self.get_gender_display()})'


class Diaper(ArchiveModel):
    WET = "w"
    DIRTY = "d"
    MIXED = "m"
    DRY = "r"

    STATUS_CHOICES = (
        (WET, "Wet"),
        (DIRTY, "Dirty"),
        (MIXED, "Mixed"),
        (DRY, "Dry"),
    )

    baby = models.ForeignKey("Baby", on_delete=models.CASCADE, related_name="diapers")
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)
    time = models.TimeField()
    notes = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Diapers"

    def __str__(self):
        """Return a human-readable string representing a record"""
        return f'{self.get_status_display()}'


class Formula(ArchiveModel):
    baby = models.ForeignKey("Baby", on_delete=models.CASCADE, related_name="formula_feeding")
    time = models.TimeField()
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    notes = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Formula"

    def __str__(self):
        """Return a human-readable string representing a record"""
        return f'{self.amount}'


class Expressed(ArchiveModel):
    baby = models.ForeignKey("Baby", on_delete=models.CASCADE, related_name="expressed_feeding")
    time = models.TimeField()
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    notes = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Expressed"

    def __str__(self):
        """Return a human-readable string representing a record"""
        return f'{self.amount}'
