import { Router } from 'express';
import {
  getContactController,
  getContactsController,
} from '../controllers/contacts';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', getContactController);

export default router;
