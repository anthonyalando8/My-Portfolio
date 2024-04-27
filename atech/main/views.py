from django.shortcuts import render
from django.middleware.csrf import get_token
from django.http import JsonResponse

# Create your views here.
def index(request):
    user_agent = request.META.get('HTTP_USER_AGENT', '')
    print(user_agent)
    # return render(request,'main/index.html',{})
    csrf_token = get_token(request)
    if request.method == "GET":
        return JsonResponse({'csrf_token': csrf_token})
    else:
        return render(request,'main/index.html',{})
