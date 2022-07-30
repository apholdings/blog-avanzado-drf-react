from django.urls import path

from .views import *


urlpatterns = [
    path('', BlogListView.as_view()),
    path('<post_slug>/', PostDetailView.as_view())
]
