import express from 'express';
import { createBooking, getBookingByCode, getBookingsByEmail } from '../controllers/bookings.controller.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/:code', getBookingByCode);
router.get('/email/:email', getBookingsByEmail);

export default router;