from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer

@api_view(['POST'])
def send_message(request):
    """
    Interacts with the React frontend to receive and save 
    contact transmissions to the database.
    """
    if request.method == 'POST':
        # 1. Take the JSON from React and pass it to the Serializer
        serializer = ContactMessageSerializer(data=request.data)
        
        # 2. Validate the data (Check if email is valid, name exists, etc.)
        if serializer.is_valid():
            serializer.save() # Saves to PostgreSQL/SQLite
            return Response({
                "status": "SUCCESS", 
                "message": "Transmission Received and Encrypted."
            }, status=status.HTTP_201_CREATED)
        
        # 3. If data is bad, send back the errors (e.g., "Email is invalid")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)