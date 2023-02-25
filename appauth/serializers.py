from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class TokenObtainPairCustomSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # custom claims
        token['username'] = user.username
        token['first'] = user.first_name
        token['last'] = user.last_name

        return token
