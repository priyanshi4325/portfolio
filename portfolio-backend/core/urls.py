
from django.contrib import admin
from django.urls import path
from contacts.views import send_message

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contacts/', send_message),
]
