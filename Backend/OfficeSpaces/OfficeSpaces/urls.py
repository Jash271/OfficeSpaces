"""OfficeSpaces URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from OfficeSpacesRest import views as login_view
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from .router import router
from rest_framework.authtoken import views
from django.contrib.auth import views as auth


urlpatterns = [
    path('operations/', include('OfficeSpacesRest.urls')),
    path('admin/', admin.site.urls),
    path('login/', login_view.Login, name='login'),
    path('logout/', auth.LogoutView.as_view(template_name='user / index.html'), name='logout'),
    path('register/', login_view.register, name='register'),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token, name='api-tokn-auth'),

]
urlpatterns = urlpatterns + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
