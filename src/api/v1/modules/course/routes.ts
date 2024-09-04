import express from 'express'
import UserController from '../user/controllers'
import upload from '../../../../libs/utils/services/multer'
import checkTotalFileSize from '../../../../libs/middlewares/validators/file.validator'
import CourseController from './controllers'
const router = express.Router()

const userController = new UserController()
const courseController = new CourseController()

router.route('/:userId/course').get(courseController.getAllCourses).post(
  // Create new course
  upload.array('files', 25),
  checkTotalFileSize,
  courseController.createCourse
)

router.get('/users/:userId', courseController.getUserCourses)

// router.route('/:courseId').get(userController.getCourse).put().delete()

export default router