from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    # api
    path('', include('quickstart.urls')),

    # django admin
    path('admin/', admin.site.urls),

    # auth
    path('auth/', include('appauth.urls'))
]
