from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    photo=models.ImageField()
    address=models.CharField(max_length=256)
    user_ref = models.ForeignKey(User, on_delete=models.CASCADE)

class Social_disancing_violations:
    number_of_violations=models.IntegerField()
    timestamp=models.DateTimeField()
    photo_violation=models.ImageField()
