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

As this project is in the early stages of development, installation instructions will be updated later.
