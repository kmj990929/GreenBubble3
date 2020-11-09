from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='user_index'),
    path('signup', views.signup, name='user_signup'),
    path('signup/join', views.join, name='user_join'),
    path('signin', views.signin, name='user_signin'),
    path('signin/login', views.login, name='user_login'),
    path('loginFail', views.loginFail, name='user_loginFail'),
    path('verify', views.verify, name='user_verify'),
    path('result', views.result, name='user_result'),
    path('logout', views.logout, name='user_logout'),
]