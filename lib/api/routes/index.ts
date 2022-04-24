import { Router } from 'express';
import WelcomeToExpressApplication from '../controllers/WelcomeController';
const router = Router();

// auth routes
router.get('', WelcomeToExpressApplication);
// order routes

export default router;
