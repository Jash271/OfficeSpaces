from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from rest_framework import routers

urlpatterns = [
    path("SignIn", views.SignIn.as_view(), name="SignIn"),
    path("Employees",views.EmployeeData.as_view(),name="Employees"),
    path(
        'Employee/<int:id>',
        views.EmployeeInstance.as_view(),
        name="Employee"
    )
]
