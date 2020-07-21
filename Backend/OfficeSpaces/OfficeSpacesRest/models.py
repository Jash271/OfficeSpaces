from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Profile(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to="Photos", default="Icon.jpg")
    address = models.CharField(max_length=256)
    user_ref = models.ForeignKey(User, on_delete=models.CASCADE)
    Is_Manager = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user_ref}"


class Social_distancing_violation(models.Model):
    number_of_violations = models.IntegerField()
    timestamp = models.DateTimeField()
    photo_violation = models.ImageField(upload_to="social_distancing_violation")

    def __str__(self):
        return f"violations:{self.number_of_violations}----TimeStamp{self.timestamp}"


class Mask_in_public(models.Model):
    date = models.DateField()
    intime = models.TimeField()
    outtime = models.TimeField()
    user_ref = models.ForeignKey(User, on_delete=models.CASCADE)


class Attendance(models.Model):
    number_of_violations = models.IntegerField()
    timestamp = models.DateTimeField()
    photo_violation = models.ImageField(upload_to="mask_in_public")
    user_ref = models.ForeignKey(User, on_delete=models.CASCADE)


class Announcements(models.Model):
    file = models.FileField()
    publisher = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    photo = models.ImageField(upload_to="photos")
