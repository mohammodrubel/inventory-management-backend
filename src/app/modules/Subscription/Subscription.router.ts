
import { Role } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SubscriptionController } from './Subscription.controller';
import { SubscriptionValidation } from './Subscription.validation';

const router = Router();

router.post(
    '/create-subscriptoin',
    auth(Role.SUPER_ADMIN),
    validateRequest(SubscriptionValidation.createSubscription),
    SubscriptionController.createSubscription
);

router.get(
    '/',
    // auth(Role.SUPER_ADMIN),
    SubscriptionController.getAllSubscription
);

router.get(
    '/:id',
    auth(Role.SUPER_ADMIN),
    SubscriptionController.getSingleSubscription
);

router.patch(
    '/:id',
    auth(Role.SUPER_ADMIN),
    validateRequest(SubscriptionValidation.updateSubscription),
    SubscriptionController.updateSubscription
);

router.delete(
    '/:id',
    auth(Role.SUPER_ADMIN),
    SubscriptionController.deleteSubscription
);

export const subscriptionRouter = router;
