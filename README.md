# Backend Documentation for Website Project

## Controllers

### addStudentController
- **Description:** Controller for adding a new student.
- **Endpoint:** `POST /api/v1/add-student`
- **Request:**
- **Response:**


### fetchStudentController
- **Description:** Controller for fetching student data.
- **Endpoint:** `GET /api/v1/requested-student`
- **Request:**
- **Response:**

### addStudentSocietyRegistrationController
- **Description:** Controller for registering a student to a society.
- **Endpoint:** `POST /api/v1/society-registration-student`
- **Request:**
- **Response:**

### deleteStudentSocietyRegistrationController
- **Description:** Controller for deleting a student's society registration.
- **Endpoint:** `DELETE /api/v1/delet/:studentId`
- **Request:**
- **Response:**

### updateStudentSocietyRegistrationController
- **Description:** Controller for updating a student's society registration.
- **Endpoint:** `PUT /api/v1/update/:studentId`
- **Request:**
- **Response:**

### studentLoginController
- **Description:** Controller for student login.
- **Endpoint:** `POST /api/v1/auth/student-login`
- **Request:**
- **Response:**

### adminLoginController
- **Description:** Controller for admin login.
- **Endpoint:** `POST /api/v1/auth/login`
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

### adminSignUpController
- **Description:** Controller for admin signup.
- **Endpoint:** `POST /api/v1/auth/sign-up`
- **Request:**
- **Response:**

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
