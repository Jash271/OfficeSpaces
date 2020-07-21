from rest_framework import serializers
from django.contrib.auth.models import User
from .models  import *


class userSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class EmployeeSerializer(serializers.ModelSerializer):
    User_ref = userSerializers(many=False , read_only = True)
    class Meta:
        model = Profile
        fields = "__all__"