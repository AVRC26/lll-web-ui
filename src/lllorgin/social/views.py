from django.shortcuts import render

# Create your views here.
def google(request):
    return render(request, "social/google.html")
    
def twitter(request):
    return render(request, "social/twitter.html")

def facebook(request):
    return render(request, "social/facebook.html")

def instagram(request):
    return render(request, "social/instagram.html")

def social(request):
    return render(request, "social/index.html")