from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('', include('quickstart.urls')),

    # django admin
    path('admin/', admin.site.urls),
]
