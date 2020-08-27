from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class userSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "username",
        ]


class EmployeeSerializer(serializers.ModelSerializer):
    user_ref = userSerializers(many=False, read_only=True)

    class Meta:
        model = Profile
        fields = ["first_name", "last_name", "photo", "address", "user_ref", "id"]


class AllAnnouncmentSerializer(serializers.ModelSerializer):
    publisher = userSerializers(many=False, read_only=True)

    class Meta:
        model = Announcements
        fields = ["File", "description", "publisher", "Date", "Time", "Title", "id"]
