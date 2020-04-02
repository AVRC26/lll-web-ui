from django.shortcuts import render

# Create your views here.
def snaps(request):
    return render(request, "studio/snaps.html")
    
def travels(request):
    return render(request, "studio/travels.html")

def memories(request):
    return render(request, "studio/memories.html")

def studio(request):
    return render(request, "studio/index.html")