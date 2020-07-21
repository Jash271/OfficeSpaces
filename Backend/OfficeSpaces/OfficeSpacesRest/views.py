from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, action
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
import json
from django.http import JsonResponse, HttpResponse
from rest_framework import generics, status, viewsets, permissions
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.utils import timezone
import datetime
from django.contrib.auth.decorators import login_required
from .models import *
import base64
from django.utils.html import escape
import ast
from django.contrib.auth.models import User
from .permissions import *
from .serializers import *
import pandas as pd
from rest_framework.authtoken.views import APIView
from rest_framework.response import Response


class SignIn(generics.GenericAPIView):
    def post(self, request):
        username = request.data["Username"]
        password = request.data["Password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            print(token.key)

            login(request, user)
            try:
                p = Profile.objects.get(user_ref=request.user)
                print("1")

                message = {
                    "user_id": p.user_ref.username,
                    "First_Name": p.first_name,
                    "Last_Name": p.last_name,
                    "Address": p.address,
                    "Token": token.key,
                    "Photo": p.photo.url,
                    "Is_Manager": p.Is_Manager,
                }
                return JsonResponse(message, status=status.HTTP_200_OK)

            except:
                message = {"Message": "There was some error"}
                return JsonResponse(message, status=status.HTTP_400_BAD_REQUEST)

        else:
            message = {"Message": "Wrong Credentials enetered"}
            return JsonResponse(message, status=status.HTTP_400_BAD_REQUEST)


class EmployeeData(generics.ListAPIView):
    authentication_classes = (TokenAuthentication,)
    serializer_class = EmployeeSerializer
    queryset = Profile.objects.filter(Is_Manager=False)