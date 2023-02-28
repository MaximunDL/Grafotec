from django.urls import path
from .views import servicio, corporativa, packag, publicidad, giganto, digital

urlpatterns = [
    path("", servicio, name='servicio'),
    path("corporativa/", corporativa, name='corporativa'),
    path("giganto/", giganto, name='giganto'),
    path("packaging/", packag, name='packag'),
    path("publicidad/", publicidad, name='publicidad'),
    path("digital/", digital, name='digital'),
]