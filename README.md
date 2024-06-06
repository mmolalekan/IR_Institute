# Learning Management System (LMS)

This project is a Learning Management System (LMS) built with Django for the backend and React for the frontend. The LMS allows students access subjects and topics, watch lecture videos, read PDFs, and take quizzes. The progress and scores are tracked and displayed on a dashboard.

## Table of Contents

- [Project Architecture](#project-architecture)
- [Setup Instructions](#setup-instructions)
- [Usage Guidelines](#usage-guidelines)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)

## Project Architecture

The project consists of two main parts:
1. **Backend:** Django REST Framework
2. **Frontend:** React

### Backend
- **Django Models:**
  - `Subject`
  - `Topic`
  - `Question`
- **Django Views:**
  - API views for CRUD operations on Subjects, Topics, and Questions
  - Authentication views for student registration and login
- **Django Serializers:**
  - Serializers for Subject, Topic, and Question models

### Frontend
- **React Components:**
  - `NavbarSidebar`
  - `Footer`
  - `Dashboard`
  - `Course`
  - `Question`
  - `Contact`
  - `Profile`
- **Routing:**
  - React Router is used for navigation between components

## Setup Instructions

### Backend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mmolalekan/IR_Institute.git
   cd IR_Institute

2. **Create a virtual environment:**
   ```sh
   python3 -m venv venv
   source venv/bin/activate
3. **Install dependencies:**
   ```sh
   cd backend
   pip install -r requirements.txt
4. **Run migrations:**
   ```sh
   python manage.py makemigrations
   python manage.py migrate
5. **Create a superuser:**
   ```sh
   python manage.py createsuperuser
6. **Start the development server:**
   ```sh
   python manage.py runserver


### Frontend Setup

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend

2. **Install dependencies:**
   ```sh
   npm install
3. **Start the development server:**
   ```sh
   npm start

## Usage Guidelines

### Register and Login:
- Navigate to the django admin panel. at 127.0.0.1:8000/admin
- Login with the superuser credentials to access the admin.

### Dashboard:
- The dashboard displays the overall score and completion percentage for each course.
- It also lists the topics completed and in progress.

### Courses and Topics:
- Click on a course to see the list of topics.
- Each topic contains a video, a PDF, and quizzes.

### Taking Quizzes:
- Watch the lecture video and read the PDF.
- Answer the quiz questions.
- Your score and completion percentage will be saved and displayed on the dashboard.

## API Endpoints

### Subjects
- `GET /api/subjects/` - List all subjects
- `POST /api/subjects/` - Create a new subject
- `GET /api/subjects/:id/` - Retrieve a subject by ID
- `PATCH /api/subjects/:id/` - Update a subject by ID
- `DELETE /api/subjects/:id/` - Delete a subject by ID

### Topics
- `GET /api/topics/` - List all topics
- `POST /api/topics/` - Create a new topic
- `GET /api/topics/:id/` - Retrieve a topic by ID
- `PATCH /api/topics/:id/` - Update a topic by ID
- `DELETE /api/topics/:id/` - Delete a topic by ID
- `POST /api/topics/:id/save-progress/` - Save progress for a topic

### Questions
- `GET /api/questions/` - List all questions
- `POST /api/questions/` - Create a new question
- `GET /api/questions/:id/` - Retrieve a question by ID
- `PATCH /api/questions/:id/` - Update a question by ID
- `DELETE /api/questions/:id/` - Delete a question by ID

## Frontend Components

### NavbarSidebar
- Contains navigation links to different parts of the LMS.

### Footer
- A simple footer component.

### Dashboard
- Displays the overall progress and scores for each course.

### Course
- Lists the topics within a selected course.

### Question
- Handles the quiz functionality for each topic.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
