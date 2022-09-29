from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User

class UserImg(models.Model):
    user = models.ForeignKey(User, related_name="user+",on_delete=models.CASCADE)
    img = models.ImageField(blank=True)
    uploded_on = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.user.username

class Profile(models.Model):
    user = models.ForeignKey(User, related_name="user+", on_delete=models.CASCADE)
    phone = models.CharField(max_length=13, blank=True, null=True)
    country = models.CharField(max_length=20)
    city = models.CharField(max_length=30, blank=True, null=True)
    address = models.TextField(max_length=30, blank=True, null=True)
    img = models.ForeignKey(UserImg, on_delete=models.CASCADE, related_name="img+")
    def __str__(self):
        return self.user.username

class UserImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImg
        fields = "__all__"

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImg
        fields = "__all__"

