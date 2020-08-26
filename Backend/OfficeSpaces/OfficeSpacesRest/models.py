from django.db import models
from django.contrib.auth.models import User
import datetime
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
    date = models.DateField(auto_now_add=True)
    time=models.TimeField(auto_now_add=True)
    photo_violation = models.ImageField(upload_to="social_distancing_violation")
    class Meta:
        ordering=['-date','-time']

    def __str__(self):
        return f"violations:{self.number_of_violations}----TimeStamp{self.date} ----------{self.time}"

class Mask_in_public(models.Model):
    number_of_violations = models.IntegerField()
    date=models.DateField(auto_now_add=True)
    time=models.TimeField(auto_now_add=True)
    photo_violation = models.ImageField(upload_to="mask_in_public")
    class Meta:
        ordering=['-date','-time']

    def __str__(self):
        return f"violations:{self.number_of_violations}----TimeStamp{self.date} ----------{self.time}"

class Attendance(models.Model):
    date = models.DateField()
    intime = models.TimeField()
    outtime = models.TimeField()
    user_ref = models.ForeignKey(User, on_delete=models.CASCADE)
    
class Announcements(models.Model):
    Title = models.TextField()
    publisher = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    File = models.FileField(upload_to="Documents")
    Date=models.DateField(auto_now_add=True)
    Time=models.TimeField(auto_now_add=True)
    class Meta:
        ordering=['-Date','-Time']

    def __str__(self):
        return f'{self.description[:10]}-----{self.Date}-----{self.Time}'
 
 
 

