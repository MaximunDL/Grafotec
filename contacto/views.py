from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Contact

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        contact = Contact.objects.get(name=name, email=email, message=message)
        contact.save()
        # Procesar el formulario enviado
        return HttpResponseRedirect(reverse('contact'))
    else:
        # Mostrar el formulario de contacto
        return render(request, 'contactanos.html')


