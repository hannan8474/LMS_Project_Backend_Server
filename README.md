# Backend Documentation for Website Project

## Controllers

### addStudentController
- **Description:** Controller for adding a new student.
- **Endpoint:** `POST /api/v1/add-student`
- **Request:**
  Request is form type
- **Response:**
{<br />
  "success": true,<br />
  "data": {<br />
    "name": "Nawazish",<br />
    "cnic": "33202-0713392-9",<br />
    "email": "abc12@gmail.com",<br />
    "password": "pucit_",<br />
    "rollNumber": "bcsf22m504",<br />
    "batchNumber": "F22",<br />
    "shift": "Morning",<br />
    "semester": "3",<br />
    "subjectNumbers": 1,<br />
    "subjects": [<br />
      "PF"<br />
    ],<br />
    "profileImageLink": "http://localhost:3000/profileImage_20240501T134948_20230918_150756.jpg",<br />
    "adminId": "65cf5b8f5d3737c06d8dfb47",<br />
    "_id": "6632487c60cf88a3859bcee2",<br />
    "createdAt": "2024-05-01T13:49:48.477Z",<br />
    "updatedAt": "2024-05-01T13:49:48.477Z",<br />
    "__v": 0<br />
  }<br />
}<br />


### fetchStudentController
- **Description:** Controller for fetching student data.
- **Endpoint:** `GET /api/v1/requested-student`
- **Request:**
  Required: Bearer access token, generated at time of student login.
- **Response:**
{<br />
  "success": true,<br />
  "student": {<br />
    "_id": "65d238d6bac6f41a6874bdd0",<br />
    "name": "Abdul Hannan",<br />
    "cnic": "3320207133927",<br />
    "email": "raoabdulhannan757@gmail.com",<br />
    "password": "123",<br />
    "rollNumber": "bcsf22m505",<br />
    "batchNumber": "F22",<br />
    "shift": "Morning",<br />
    "semester": "3rd",<br />
    "subjectNumbers": 5,<br />
    "subjects": [<br />
      {<br />
        "subjectId": "1",<br />
        "subjectName": "COAL"<br />
      },<br />
      {
        "subjectId": "2",<br />
        "subjectName": "OOP"<br />
      },<br />
      {<br />
        "subjectId": "3",<br />
        "subjectName": "Economics"<br />
      },<br />
      {<br />
        "subjectId": "4",<br />
        "subjectName": "Quran Translation"<br />
      },<br />
      {<br />
        "subjectId": "5",<br />
        "subjectName": "Calculus"<br />
      }<br />
    ],<br />
    "profileImageLink": "http://localhost:3000/profileImage_20240218T170526_20230910_144841.jpg",<br />
    "adminId": {<br />
      "_id": "65cf5b8f5d3737c06d8dfb47",<br />
      "email": "admin@gmail.com"<br />
    },<br />
    "createdAt": "2024-02-18T17:05:26.484Z",<br />
    "updatedAt": "2024-02-18T17:05:26.484Z",<br />
    "__v": 0<br />
  }<br />
}<br />

### addStudentSocietyRegistrationController
- **Description:** Controller for registering a student to a society.
- **Endpoint:** `POST /api/v1/society-registration-student`
- **Request:**
{<br />
  "name":"Faizan Ahmad",<br />
  "rollNumber":"bcsf22m505",<br />
  "email":"abc@gmail.com",<br />
  "department":"CS",<br />
  "semester":"2nd",<br />
  "hobbies":"hockey",<br />
  "aboutYourself":"I am good"<br />
}<br />
- **Response:**
{<br />
  "success": true,<br />
  "data": {<br />
    "name": "Faizan Ahmad",<br />
    "rollNumber": "bcsf22m505",<br />
    "email": "abc@gmail.com",<br />
    "department": "CS",<br />
    "semester": "2nd",<br />
    "hobbies": "hockey",<br />
    "aboutYourself": "I am good",<br />
    "_id": "663248b860cf88a3859bcee4",<br />
    "createdAt": "2024-05-01T13:50:48.827Z",<br />
    "updatedAt": "2024-05-01T13:50:48.827Z",<br />
    "__v": 0
  }<br />
}<br />

### deleteStudentSocietyRegistrationController
- **Description:** Controller for deleting a student's society registration.
- **Endpoint:** `DELETE /api/v1/delet/:studentId`
- **Request:**
{<br />
  "name":"Raaziya Naveed",<br />
  "rollNumber":"BCSF22M517",<br />
  "email":"raaziyanaveed@gmail.com",<br />
  "department":"Computer Science",<br />
  "semester":"Third",<br />
  "hobbies":"Watching Seasons",<br />
  "aboutYourself":"I, me and myself"<br />
}<br />
- **Response:**
{<br />
  "success": true,<br />
  "message": "Student deleted successfully",<br />
  "deletedStudent": {<br />
    "_id": "65ce41729d259a245e3e4845",<br />
    "name": "Raaziya Naveed",<br />
    "rollNumber": "BCSF22M517",<br />
    "email": "raaziyanaveed@gmail.com",<br />
    "department": "Computer Science",<br />
    "semester": "Third",<br />
    "hobbies": "Watching Seasons",<br />
    "aboutYourself": "I, me and myself",<br />
    "createdAt": "2024-02-15T16:53:06.012Z",<br />
    "updatedAt": "2024-05-01T13:43:27.219Z",<br />
    "__v": 0<br />
  }<br />
}<br />

### updateStudentSocietyRegistrationController
- **Description:** Controller for updating a student's society registration.
- **Endpoint:** `PUT /api/v1/update/:studentId`
- **Request:**
{
  "name":"Raaziya Naveed",<br />
  "rollNumber":"BCSF22M517",<br />
  "email":"raaziyanaveed@gmail.com",<br />
  "department":"Computer Science",<br />
  "semester":"Third",<br />
  "hobbies":"Watching Seasons",<br />
  "aboutYourself":"I, me and myself"<br />
}<br />
- **Response:**
{
  "success": "true",<br />
  "message": "Student updated successfully",<br />
  "updatedStudent": {<br />
    "_id": "65ce41729d259a245e3e4845",<br />
    "name": "Raaziya Naveed",<br />
    "rollNumber": "BCSF22M517",<br />
    "email": "raaziyanaveed@gmail.com",<br />
    "department": "Computer Science",<br />
    "semester": "Third",<br />
    "hobbies": "Watching Seasons",<br />
    "aboutYourself": "I, me and myself",<br />
    "createdAt": "2024-02-15T16:53:06.012Z",<br />
    "updatedAt": "2024-05-01T13:43:27.219Z",<br />
    "__v": 0<br />
  }<br />
}<br />

### studentLoginController
- **Description:** Controller for student login.
- **Endpoint:** `POST /api/v1/auth/student-login`
- **Request:**
{<br />
  "email":"raoabdulhannan757@gmail.com",<br />
  "password":"123"<br />
}<br />
- **Response:**
{<br />
  "success": true,<br />
  "message": "user logged in successfully",<br />
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhb2FiZHVsaGFubmFuNzU3QGdtYWlsLmNvbSIsImlhdCI6MTcxNDU2OTcwN30.BiP_Puqb4GMv3lSFaiAcVq0r5O2p25X25-qqn11lgPw",<br />
  "existingUser": {<br />
    "_id": "65d238d6bac6f41a6874bdd0",<br />
    "name": "Abdul Hannan",<br />
    "cnic": "3320207133927",<br />
    "email": "raoabdulhannan757@gmail.com",<br />
    "password": "123",<br />
    "rollNumber": "bcsf22m505",<br />
    "batchNumber": "F22",<br />
    "shift": "Morning",<br />
    "semester": "3rd",<br />
    "subjectNumbers": 5,<br />
    "subjects": [<br />
      {<br />
        "subjectId": "1",<br />
        "subjectName": "COAL"<br />
      },<br />
      {<br />
        "subjectId": "2",<br />
        "subjectName": "OOP"<br />
      },<br />
      {<br />
        "subjectId": "3",<br />
        "subjectName": "Economics"<br />
      },<br />
      {<br />
        "subjectId": "4",<br />
        "subjectName": "Quran Translation"<br />
      },<br />
      {<br />
        "subjectId": "5",<br />
        "subjectName": "Calculus"<br />
      }<br />
    ],<br />
    "profileImageLink": "http://localhost:3000/profileImage_20240218T170526_20230910_144841.jpg",<br />
    "adminId": "65cf5b8f5d3737c06d8dfb47",<br />
    "createdAt": "2024-02-18T17:05:26.484Z",<br />
    "updatedAt": "2024-02-18T17:05:26.484Z",<br />
    "__v": 0<br />
  }<br />
}<br />

### adminLoginController
- **Description:** Controller for admin login.
- **Endpoint:** `POST /api/v1/auth/login`
- **Request:**
{<br />
  "email":"admin@gmail.com",<br />
  "password":"123"<br />
}<br />
- **Response:**
{<br />
  "success": true,<br />
  "message": "user logged in successfully",<br />
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTcxNDU3MDM2MX0.G1-pRFYFjbXcksYF5YARZ4lyMb_w6fk_7qpceMdZ2ek",<br />
  "existingAdmin": {<br />
    "_id": "65cf5b8f5d3737c06d8dfb47",<br />
    "name": "admin",<br />
    "email": "admin@gmail.com",<br />
    "password": "$2b$10$DFQdu8WPvkbQfn14XLLV6.7tV7ow9exPca.7SVahAWDprnCifq2wy",<br />
    "createdAt": "2024-02-16T12:56:47.607Z",<br />
    "updatedAt": "2024-02-16T12:56:47.607Z",<br />
    "__v": 0<br />
  }<br />
}<br />

### adminSignUpController
- **Description:** Controller for admin signup.
- **Endpoint:** `POST /api/v1/auth/sign-up`
- **Request:**
{<br />
  "name":"admin2",<br />
  "email":"admin2@gmail.com",<br />
  "password":"123"<br />
}<br />
- **Response:**
{<br />
  "success": true,<br />
  "admin": {<br />
    "name": "admin2",<br />
    "email": "admin2@gmail.com",<br />
    "password": "$2b$10$6zLbBpPimMjOhyCbfbmMxOgzV3HYBk5GPO51iRo4gDfWolOVW8gb2",<br />
    "_id": "663244af60cf88a3859bced3",<br />
    "createdAt": "2024-05-01T13:33:35.648Z",<br />
    "updatedAt": "2024-05-01T13:33:35.648Z",<br />
    "__v": 0<br />
  }<br />
}<br />

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
