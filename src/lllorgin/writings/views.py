from django.shortcuts import render


# Create your views here.
def life(request):
    return render(request, "writings/life.html")
    
def travel(request):
    return render(request, "writings/travel.html")

def moments(request):
    return render(request, "writings/moments.html")

def technology(request):
    return render(request, "writings/technology.html")

def writings(request):
    return render(request, "writings/index.html")
