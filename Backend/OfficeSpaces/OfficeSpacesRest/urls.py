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
    ),
    path("Employee_data", views.Employee_Data.as_view(), name="Employee_data"),
    path("Add_Violation",views.Add_Violation.as_view(),name="Add_Violation"),
    path("AddAnnouncement",views.AddAnnouncement.as_view(),name="AddAnnouncement"),
    path('AllAnnouncements',views.AllAnnouncement.as_view(),name="AllAnnouncements"),

]
