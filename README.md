# react-django-sns

Developing an SNS application using the JavaScript web framework React for the front end and the Python web framework Django RestFramework for the back end. This project is aimed at learning through building, focusing on front-end component-based development with React and API design using Django RestFramework.

## Motivation

This project was started with the purpose of learning. By utilizing React for the front-end and Django RestFramework for the backend API construction, the goal is to gain a deeper experience in full-stack development.

## Main Features

This SNS application includes the following features:

- **Login Page**
- **SNS Dashboard**
  - Friend request button
  - Profile list
  - My profile
  - Unread friend requests
  - Logout button
  - Friend request approval
  - DM (Direct Message) sending dialog

- **Models (Django RestFramework)**
  - User (email, password)
  - Profile (userPro, nickName, created_on, img)
  - FriendRequest (askFrom, askTo, approved)
  - Message (sender, receiver, message)

- **API Endpoints**
  - Detailed API routing including creation, retrieval, update, and deletion for User, Profile, FriendRequest, and Message entities

## Tech Stack

- **Front-end**: React
- **Back-end**: Django RestFramework
- **Database**: PostgreSQL

## System Requirements

- Poetry: 1.1.14
- Python: 3.11.4
- Django: 5.0.3
- Django RestFramework: 3.15.0

## Installation

To use this project, please follow the steps below.

### 1. Installing Required Tools
To run this project, Python and Poetry are required. Please install Python 3.11.4 and Poetry 1.1.14

### 2. Cloning the Project
Clone the project from GitHub to your local system.

```bash
git clone https://github.com/bp20110/react-django-sns.git
cd react-django-sns
```

### 3. Installing Dependencies
Use Poetry to install the project's dependencies.

```bash
poetry install
```

### 4. Starting Development
Now that the environment is set up, you can start your development!
