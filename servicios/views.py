from django.shortcuts import render

def servicio (request):
    return render(request, 'servicio.html')

def corporativa (request):
    return render(request, 'corporativa.html')

def giganto (request):
    return render(request, 'giganto.html')

def publicidad (request):
    return render(request, 'publicidad.html')

def packag (request):
    return render(request, 'packaging.html')

def digital (request):
    return render(request, 'digital.html')
