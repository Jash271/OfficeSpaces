from django.contrib import admin
from .models import *

# Register your models here.


class SocialDistancingViolation(admin.ModelAdmin):
    readonly_fields = ('date','time')

admin.site.register(Profile)
admin.site.register(Social_distancing_violation,SocialDistancingViolation)
