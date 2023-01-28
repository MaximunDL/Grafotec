from django.shortcuts import render
from .models import Project


def inicio(request):
    projects = Project.objects.all()

    # muy pendiente con la variable que esta entre comilla 'projects'
    return render(request, "home.html", {"projects": projects})