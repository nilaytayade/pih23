from django import views
from rest_framework.response import Response
from django.http import HttpResponse

def home (request):
    return HttpResponse("HOME")