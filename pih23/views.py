from django import views
from rest_framework.response import Response
from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template


def home (request):
    return render(request,'home.html')