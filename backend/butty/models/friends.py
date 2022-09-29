from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User

class AddFriend(models.Model):
    user = models.ForeignKey(User, related_name="user+", on_delete=models.CASCADE)
    friends = models.ManyToManyField(User)
    def __str__(self):
        return self.user.username

class AddFriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddFriend
        fields = "__all__"

