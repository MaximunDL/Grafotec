from django.shortcuts import render, get_object_or_404
from .models import Notice
 #mirar las variables nuevamente
def render_posts(request):
    posts = Notice.objects.all()
    return render(request, 'publicado.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Notice, pk=post_id)
    return render(request, 'publicaciones.html', {"post": post})