import {Router} from 'express';
import * as bookController from '../controllers/controller';

const router=Router();

router.get('/', bookController.getAllBooks);
router.post('/', bookController.AgregarLibroo);

export const bookRoutes=router;