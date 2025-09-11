import {Router} from 'express';
import * as bookController from '../controllers/controller';
import { createBookSchema } from '../validations/formulario.validationes';
import {validate} from '../middlewares/validation.middleware';


const router=Router();

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);

export const bookRoutes=router;