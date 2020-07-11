from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from rest_framework import routers

urlpatterns = [
    path("index", views.index, name="index"),#Dummy Url
]