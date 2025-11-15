import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { createUserSchema, updateSchema } from '../validations/user.validations';


const router = Router();
router.get(
 '/',
 authenticate,
 authorize('ADMIN'), // Solo para roles Admin
 userController.getAllUsers
);
router.get(
 '/:id',
 authenticate,
 authorize('ADMIN'),
 userController.getUserById
);
router.post('/',
 authenticate,
 authorize('ADMIN'),
 validate(createUserSchema),
 userController.createUser
);


router.delete('/:id',
 authenticate,
 authorize('ADMIN'),
 userController.deleteUser
);

export const userRoutes = router;