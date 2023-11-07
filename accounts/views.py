from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist
from .models import CustomUser
from .serializers import UserSerializer
from .decode import morse_encode,morse_decode,swap_case,snake_case,camel_case,caesar_cipher_encode,caesar_cipher_decode,vigenere_cipher_decode,vigenere_cipher_encode,base64_decode,base64_encode

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = None
        if '@' in username:
            try:
                user = CustomUser.objects.get(email=username)
            except ObjectDoesNotExist:
                pass

        if not user:
            user = authenticate(username=username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)    
    


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        





@api_view(['POST'])
def morse(request):
    string = request.data.get('string')
    if request.data.get('type')=='encode':
        return Response({'encoded_string':morse_encode(string)},status=status.HTTP_200_OK)
    else:
        return Response({'decoded_string':morse_decode(string)},status=status.HTTP_200_OK)



@api_view(['POST'])
def inverse(request):
    string=request.data.get('string')
    return Response({"swapped case":swap_case(string)},status=status.HTTP_200_OK)

@api_view(['POST'])
def case_switch(request):
    string=request.data.get('string')
    if request.data.get('type')=='camel case':
        return Response({"camel case":camel_case(string)},status=status.HTTP_200_OK)

    else:
        return Response({"snake case":snake_case(string)},status=status.HTTP_200_OK)
    

@api_view(['POST'])
def ceaser_cipher(request):
    string=request.data.get('string')
    key=request.data.get('key')
    if request.data.get('type')=='encode':
        return Response({"ceaser encoded":caesar_cipher_encode(string,key)},status=status.HTTP_200_OK)

    else:
        return Response({"ceaser decoded":caesar_cipher_decode(string,key)},status=status.HTTP_200_OK)
    

@api_view(['POST'])
def vigenere_cipher(request):
    string=request.data.get('string')
    key=request.data.get('key')

    if request.data.get('type')=='encode':
        return Response({"vigenere encoded":vigenere_cipher_encode(string,key)},status=status.HTTP_200_OK)

    else:
        return Response({"vigenere decoded":vigenere_cipher_decode(string,key)},status=status.HTTP_200_OK)
    

@api_view(['POST'])
def base64(request):
    string=request.data.get('string')
    key=request.data.get('key')

    if request.data.get('type')=='encode':
        return Response({"base64 encoded":base64_encode(string,key)},status=status.HTTP_200_OK)

    else:
        return Response({"base64 decoded":base64_decode(string,key)},status=status.HTTP_200_OK)
    

