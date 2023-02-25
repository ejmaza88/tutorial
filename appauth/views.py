from rest_framework_simplejwt.views import TokenObtainPairView

from appauth.serializers import TokenObtainPairCustomSerializer


class TokenObtainPairCustomView(TokenObtainPairView):
    serializer_class = TokenObtainPairCustomSerializer
