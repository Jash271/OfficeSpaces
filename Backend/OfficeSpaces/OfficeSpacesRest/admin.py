from django.contrib import admin
from .models import *

# Register your models here.


class SocialDistancingViolation(admin.ModelAdmin):
    readonly_fields = ("date", "time")


class AnnouncementCheck(admin.ModelAdmin):
    readonly_fields = ("Date", "Time")


admin.site.register(Profile)
admin.site.register(Social_distancing_violation, SocialDistancingViolation)
admin.site.register(Announcements, AnnouncementCheck)
admin.site.register(Mask_in_public)
