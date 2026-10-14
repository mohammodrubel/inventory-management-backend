import { Role } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import { OrganizationController } from './Organization.controller';

const router = Router();

router.post('/',((req,res,next)=>{
    console.log(req.headers.authorization)
    next()
}), auth(Role.SUPER_ADMIN), OrganizationController.createOrganization);
router.get('/', auth(Role.SUPER_ADMIN), OrganizationController.getAllOrganization);
router.get('/:id', auth(Role.SUPER_ADMIN), OrganizationController.getSingleOrganization);


export const organizationRouter = router;
