from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models.friends import AddFriend, AddFriendSerializer
from .models.profile import UserImg, UserImageSerializer, Profile, ProfileSerializer

def index(request, **p):
    return render(request, "index.html", {})

class FriendsViews(ModelViewSet):
    queryset = AddFriend.objects.all()
    serializer_class = AddFriendSerializer

class UserImagesViews(ModelViewSet):
    queryset = UserImg.objects.all()
    serializer_class = UserImageSerializer

class ProfileViews(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
