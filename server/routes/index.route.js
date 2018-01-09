import express from 'express';
import expressJwt from 'express-jwt';
import userRoutes from './user.route';
import transactionsRoutes from './transaction.route';
import authRoutes from './auth.route';

import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK'));

// mount user routes at /users
router.use('/users', expressJwt({
    secret: config.jwtSecret,
}), userRoutes);

// mount user routes at /users
router.use('/transactions', transactionsRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;
