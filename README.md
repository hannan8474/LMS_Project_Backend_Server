# Backend Documentation for Website Project

## Controllers

### addStudentController
- **Description:** Controller for adding a new student.
- **Endpoint:** `POST /api/v1/add-student`
- **Request:**
  Request is form type
- **Response:**
{
  "success": true,
  "data": {
    "name": "Nawazish",
    "cnic": "33202-0713392-9",
    "email": "abc12@gmail.com",
    "password": "pucit_",
    "rollNumber": "bcsf22m504",
    "batchNumber": "F22",
    "shift": "Morning",
    "semester": "3",
    "subjectNumbers": 1,
    "subjects": [
      "PF"
    ],
    "profileImageLink": "http://localhost:3000/profileImage_20240501T134948_20230918_150756.jpg",
    "adminId": "65cf5b8f5d3737c06d8dfb47",
    "_id": "6632487c60cf88a3859bcee2",
    "createdAt": "2024-05-01T13:49:48.477Z",
    "updatedAt": "2024-05-01T13:49:48.477Z",
    "__v": 0
  }
}


### fetchStudentController
- **Description:** Controller for fetching student data.
- **Endpoint:** `GET /api/v1/requested-student`
- **Request:**
  Required: Bearer access token, generated at time of student login.
- **Response:**
{
  "success": true,
  "student": {
    "_id": "65d238d6bac6f41a6874bdd0",
    "name": "Abdul Hannan",
    "cnic": "3320207133927",
    "email": "raoabdulhannan757@gmail.com",
    "password": "123",
    "rollNumber": "bcsf22m505",
    "batchNumber": "F22",
    "shift": "Morning",
    "semester": "3rd",
    "subjectNumbers": 5,
    "subjects": [
      {
        "subjectId": "1",
        "subjectName": "COAL"
      },
      {
        "subjectId": "2",
        "subjectName": "OOP"
      },
      {
        "subjectId": "3",
        "subjectName": "Economics"
      },
      {
        "subjectId": "4",
        "subjectName": "Quran Translation"
      },
      {
        "subjectId": "5",
        "subjectName": "Calculus"
      }
    ],
    "profileImageLink": "http://localhost:3000/profileImage_20240218T170526_20230910_144841.jpg",
    "adminId": {
      "_id": "65cf5b8f5d3737c06d8dfb47",
      "email": "admin@gmail.com"
    },
    "createdAt": "2024-02-18T17:05:26.484Z",
    "updatedAt": "2024-02-18T17:05:26.484Z",
    "__v": 0
  }
}

### addStudentSocietyRegistrationController
- **Description:** Controller for registering a student to a society.
- **Endpoint:** `POST /api/v1/society-registration-student`
- **Request:**
{
  "name":"Faizan Ahmad",
  "rollNumber":"bcsf22m505",
  "email":"abc@gmail.com",
  "department":"CS",
  "semester":"2nd",
  "hobbies":"hockey",
  "aboutYourself":"I am good"
}
- **Response:**
{
  "success": true,
  "data": {
    "name": "Faizan Ahmad",
    "rollNumber": "bcsf22m505",
    "email": "abc@gmail.com",
    "department": "CS",
    "semester": "2nd",
    "hobbies": "hockey",
    "aboutYourself": "I am good",
    "_id": "663248b860cf88a3859bcee4",
    "createdAt": "2024-05-01T13:50:48.827Z",
    "updatedAt": "2024-05-01T13:50:48.827Z",
    "__v": 0
  }
}

### deleteStudentSocietyRegistrationController
- **Description:** Controller for deleting a student's society registration.
- **Endpoint:** `DELETE /api/v1/delet/:studentId`
- **Request:**
{
  "name":"Raaziya Naveed",
  "rollNumber":"BCSF22M517",
  "email":"raaziyanaveed@gmail.com",
  "department":"Computer Science",
  "semester":"Third",
  "hobbies":"Watching Seasons",
  "aboutYourself":"I, me and myself"
}
- **Response:**
{
  "success": true,
  "message": "Student deleted successfully",
  "deletedStudent": {
    "_id": "65ce41729d259a245e3e4845",
    "name": "Raaziya Naveed",
    "rollNumber": "BCSF22M517",
    "email": "raaziyanaveed@gmail.com",
    "department": "Computer Science",
    "semester": "Third",
    "hobbies": "Watching Seasons",
    "aboutYourself": "I, me and myself",
    "createdAt": "2024-02-15T16:53:06.012Z",
    "updatedAt": "2024-05-01T13:43:27.219Z",
    "__v": 0
  }
}

### updateStudentSocietyRegistrationController
- **Description:** Controller for updating a student's society registration.
- **Endpoint:** `PUT /api/v1/update/:studentId`
- **Request:**
{
  "name":"Raaziya Naveed",
  "rollNumber":"BCSF22M517",
  "email":"raaziyanaveed@gmail.com",
  "department":"Computer Science",
  "semester":"Third",
  "hobbies":"Watching Seasons",
  "aboutYourself":"I, me and myself"
}
- **Response:**
{
  "success": "true",
  "message": "Student updated successfully",
  "updatedStudent": {
    "_id": "65ce41729d259a245e3e4845",
    "name": "Raaziya Naveed",
    "rollNumber": "BCSF22M517",
    "email": "raaziyanaveed@gmail.com",
    "department": "Computer Science",
    "semester": "Third",
    "hobbies": "Watching Seasons",
    "aboutYourself": "I, me and myself",
    "createdAt": "2024-02-15T16:53:06.012Z",
    "updatedAt": "2024-05-01T13:43:27.219Z",
    "__v": 0
  }
}

### studentLoginController
- **Description:** Controller for student login.
- **Endpoint:** `POST /api/v1/auth/student-login`
- **Request:**
{
  "email":"raoabdulhannan757@gmail.com",
  "password":"123"
}
- **Response:**
{
  "success": true,
  "message": "user logged in successfully",
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhb2FiZHVsaGFubmFuNzU3QGdtYWlsLmNvbSIsImlhdCI6MTcxNDU2OTcwN30.BiP_Puqb4GMv3lSFaiAcVq0r5O2p25X25-qqn11lgPw",
  "existingUser": {
    "_id": "65d238d6bac6f41a6874bdd0",
    "name": "Abdul Hannan",
    "cnic": "3320207133927",
    "email": "raoabdulhannan757@gmail.com",
    "password": "123",
    "rollNumber": "bcsf22m505",
    "batchNumber": "F22",
    "shift": "Morning",
    "semester": "3rd",
    "subjectNumbers": 5,
    "subjects": [
      {
        "subjectId": "1",
        "subjectName": "COAL"
      },
      {
        "subjectId": "2",
        "subjectName": "OOP"
      },
      {
        "subjectId": "3",
        "subjectName": "Economics"
      },
      {
        "subjectId": "4",
        "subjectName": "Quran Translation"
      },
      {
        "subjectId": "5",
        "subjectName": "Calculus"
      }
    ],
    "profileImageLink": "http://localhost:3000/profileImage_20240218T170526_20230910_144841.jpg",
    "adminId": "65cf5b8f5d3737c06d8dfb47",
    "createdAt": "2024-02-18T17:05:26.484Z",
    "updatedAt": "2024-02-18T17:05:26.484Z",
    "__v": 0
  }
}

### adminLoginController
- **Description:** Controller for admin login.
- **Endpoint:** `POST /api/v1/auth/login`
- **Request:**
{
  "email":"admin@gmail.com",
  "password":"123"
}
- **Response:**
{
  "success": true,
  "message": "user logged in successfully",
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcxNDU3MDM2MX0.G1-pRFYFjbXcksYF5YARZ4lyMb_w6fk_7qpceMdZ2ek",
  "existingAdmin": {
    "_id": "65cf5b8f5d3737c06d8dfb47",
    "name": "admin",
    "email": "admin@gmail.com",
    "password": "$2b$10$DFQdu8WPvkbQfn14XLLV6.7tV7ow9exPca.7SVahAWDprnCifq2wy",
    "createdAt": "2024-02-16T12:56:47.607Z",
    "updatedAt": "2024-02-16T12:56:47.607Z",
    "__v": 0
  }
}

### adminSignUpController
- **Description:** Controller for admin signup.
- **Endpoint:** `POST /api/v1/auth/sign-up`
- **Request:**
{
  "name":"admin2",
  "email":"admin2@gmail.com",
  "password":"123"
}
- **Response:**
{
  "success": true,
  "admin": {
    "name": "admin2",
    "email": "admin2@gmail.com",
    "password": "$2b$10$6zLbBpPimMjOhyCbfbmMxOgzV3HYBk5GPO51iRo4gDfWolOVW8gb2",
    "_id": "663244af60cf88a3859bced3",
    "createdAt": "2024-05-01T13:33:35.648Z",
    "updatedAt": "2024-05-01T13:33:35.648Z",
    "__v": 0
  }
}

## Middlewares

### fileUploadMiddleWare
- **Description:** Middleware for handling file uploads.

### isAdmin
- **Description:** Middleware for checking if the user is an admin.

### isStudent
- **Description:** Middleware for checking if the user is a student.

## Models

### adminModel
- **Description:** Model for admin data.

### newRegistration
- **Description:** Model for new registration data.

### newStudent
- **Description:** Model for new student data.

## Requests

- **BASE_URL:** `http://localhost:3000`
- **API_VERSION_1:** `/api/v1`

```javascript
const endPoints = {
    REQUESTED_STUDENT: `/requested-student`,
    SOCIETY_REGISTRATION: `/society-registration-student`, 
    ADD_STUDENT: `/add-student`,
    STUDENT_LOGIN: `/auth/student-login`,
    ADMIN_SIGNUP: `/auth/sign-up`,
    ADMIN_LOGIN: `/auth/login`
}
