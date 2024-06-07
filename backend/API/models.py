from django.db import models

# Create your models here.
from django.db import models

class Subject(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Topic(models.Model):
    subject = models.ForeignKey(Subject, related_name='topics', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    video_url = models.URLField(max_length=200, blank=True, null=True)
    pdf_url = models.URLField(max_length=200, blank=True, null=True)
    submitted = models.BooleanField(default=False)
    saved = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Question(models.Model):
    topic = models.ForeignKey(Topic, related_name='questions', on_delete=models.CASCADE)
    question_text = models.TextField()
    option1 = models.CharField(max_length=255)
    option2 = models.CharField(max_length=255)
    option3 = models.CharField(max_length=255)
    option4 = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=255)

    def __str__(self):
        return f"Q: {self.topic.title} of {self.topic.subject.title}"
