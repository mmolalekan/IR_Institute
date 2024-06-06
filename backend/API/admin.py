from django.contrib import admin

# Register your models here.
from .models import Question, Topic, Subject

admin.site.register(Subject)
admin.site.register(Topic)
admin.site.register(Question)
