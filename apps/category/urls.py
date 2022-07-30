from django.urls import path

from .views import *


urlpatterns = [
    path('categories', ListCategoriesView.as_view()),
]
