from django.urls import path
from . import views

urlpatterns = [
    path('subjects/', views.subject_list, name='subject-list'),
    path('subjects/<int:pk>/', views.subject_detail, name='subject-detail'),
    path('topics/', views.topic_list, name='topic-list'),
    path('topics/<int:pk>/', views.topic_detail, name='topic-detail'),
    path('questions/', views.question_list, name='question-list'),
    path('questions/<int:pk>/', views.question_detail, name='question-detail'),
]
