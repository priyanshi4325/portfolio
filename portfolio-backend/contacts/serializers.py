from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        # These fields must match your models.py AND your React fetch keys
        fields = ['id', 'name', 'email', 'message', 'subject',  'created_at']