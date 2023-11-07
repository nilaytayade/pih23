from django.urls import path
from .views import register_user, user_login, user_logout,morse,inverse,case_switch,ceaser_cipher,vigenere_cipher,base64

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('morse/',morse),
    path('inverse/', inverse),
    path('case_switch/', case_switch),
    path('ceaser/', ceaser_cipher),
    path('vigenere/', vigenere_cipher),
    path('base64/', base64),


]