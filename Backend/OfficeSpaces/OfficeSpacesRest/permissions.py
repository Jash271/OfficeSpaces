from rest_framework import permissions
from .models import *
from django.contrib.auth.models import User
from requests.api import request


class Permit(permissions.BasePermission):
    message = "Access Denied"

    def has_permission(self, request, view):
        try:
            p = Profile.objects.get(user_ref=request.user)
            if p.Is_Manager:
                return True
            else:
                return False
        except:
            return False
