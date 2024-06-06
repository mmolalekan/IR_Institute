# Learning Management System (LMS)

This project is a Learning Management System (LMS) built with Django REST Framework for the backend and React for the frontend. The LMS allows students to register, log in, access subjects and topics, watch lecture videos, read PDFs, and take quizzes. The progress and scores are tracked and displayed on a dashboard.

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
- **Routing:**
  - React Router is used for navigation between components

## Setup Instructions

### Backend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
