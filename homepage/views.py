from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'index.html')

def calculations(request):
    name = str(request.GET['item'])
    money_inserted = float(request.GET['money'])
    
    if name.lower() == "flake" or name.upper() == "Flake":  
        item_price = float(25.50)
        total_cost = round(float(money_inserted - item_price),2)
    elif name.lower() == "wispa" or name.upper() == "Wispa":
        item_price = float(30.50)
        total_cost = round(float(money_inserted - item_price),2)
    elif name.lower() == "crunchie" or name.upper() == "Crunchie":
        item_price = float(56.70)
        total_cost = round(float(money_inserted - item_price),2)
    elif name.lower() == "milky way" or name == "Milky Way" or name.upper() == "Milky way":
        item_price = float(35.76)
        total_cost = round(float(money_inserted - item_price),2)
    elif name.lower() == "boost":
        item_price = float(18.79)
        total_cost = round(float(money_inserted - item_price),2)
    else:
        item_price = print()

    return render(request, 'results.html', {'result': total_cost})