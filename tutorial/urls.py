from django.contrib import admin
from django.urls import include, path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('', include('quickstart.urls')),

    # django admin
    path('admin/', admin.site.urls),


    # sjwt
    path('token/', TokenObtainPairView.as_view(), name='token-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
