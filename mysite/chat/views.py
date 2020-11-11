# chat/views.py
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json

def index(request):
    return render(request, 'chat/index.html', {})

def room(request, room_name):
    #users = room_name.split('-')
    return render(request, 'chat/room.html', {
        'room_name': mark_safe(json.dumps(room_name))
    })