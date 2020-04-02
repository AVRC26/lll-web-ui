from django.shortcuts import render

# Create your views here.
def theverge(request):
    return render(request, "feed/theverge.html")
    
def indiatoday(request):
    return render(request, "feed/indiatoday.html")

def lonelyplanet(request):
    return render(request, "feed/lonelyplanet.html")

def espncricinfo(request):
    return render(request, "feed/espncricinfo.html")

def yahoofinance(request):
    return render(request, "feed/yahoofinance.html")

def popscience(request):
    return render(request, "feed/popscience.html")

def feed(request):
    return render(request, "feed/index.html")