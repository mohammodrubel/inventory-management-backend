import { Router } from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';

const router = Router();
router.post('/create-organization',((req,res,next)=>{
    next()
}), auth(Role.SUPER_ADMIN), UserController.createOrganization);
router.get('/', auth(Role.ADMIN), UserController.GetAllUsers);
router.get('/profile',UserController.userProfile)
router
  .route('/:id')
  .get(auth(Role.ADMIN), UserController.GetSingleUser)
  
  .delete(auth(Role.ADMIN), UserController.DeleteUser);

export const userRouter = router;
