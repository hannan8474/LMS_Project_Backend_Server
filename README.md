# Backend Documentation for Website Project

## Controllers

### addStudentController
- **Description:** Controller for adding a new student.
- **Endpoint:** `POST http://localhost:3000/api/v1/add-student`

### fetchStudentController
- **Description:** Controller for fetching student data.
- **Endpoint:** `GET http://localhost:3000/api/v1/requested-student`

### addStudentSocietyRegistrationController
- **Description:** Controller for registering a student to a society.
- **Endpoint:** `POST http://localhost:3000/api/v1/society-registration-student`

### deleteStudentSocietyRegistrationController
- **Description:** Controller for deleting a student's society registration.
- **Endpoint:** `DELETE http://localhost:3000/api/v1/delet/:studentId`

### updateStudentSocietyRegistrationController
- **Description:** Controller for updating a student's society registration.
- **Endpoint:** `PUT http://localhost:3000/api/v1/update/:studentId`

### studentLoginController
- **Description:** Controller for student login.
- **Endpoint:** `POST http://localhost:3000/api/v1/auth/student-login`

### adminLoginController
- **Description:** Controller for admin login.
- **Endpoint:** `POST http://localhost:3000/api/v1/auth/login`

### adminSignUpController
- **Description:** Controller for admin signup.
- **Endpoint:** `POST http://localhost:3000/api/v1/auth/sign-up`

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
