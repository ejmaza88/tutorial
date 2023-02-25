from django.urls import path

from rest_framework_simplejwt.views import TokenRefreshView

from appauth.views import TokenObtainPairCustomView


urlpatterns = [
    path('token/', TokenObtainPairCustomView.as_view(), name='token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
