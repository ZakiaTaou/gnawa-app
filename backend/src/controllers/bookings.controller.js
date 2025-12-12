import Booking from "../models/Booking.js";
import { generateConfirmationCode } from "../utils/generateCode.js";

export const createBooking = async (req, res) => {
  try {
    const { name, email, phone, number_of_seats, ticket_category, total_price, booking_date } = req.body;

if (!name || !email || !phone || !number_of_seats || !ticket_category || !total_price || !booking_date) {
  return res.status(400).json({
    success: false,
    message: 'Tous les champs sont obligatoires'
  });
}

    if (number_of_seats < 1 || number_of_seats > 10) {
      return res.status(400).json({
        success: false,
        message: "Le nombre de billets doit être entre 1 et 10",
      });
    }

    let confirmation_code;
    let isUnique = false;

    while (!isUnique) {
      confirmation_code = generateConfirmationCode();
      const existing = await Booking.findOne({
        where: { confirmation_code },
      });
      if (!existing) isUnique = true;
    }

    const booking = await Booking.create({
      name,
      email: email.toLowerCase(),
      phone,
      number_of_seats,
      ticket_category,
      total_price,
      booking_date,
      status: "confirmed",
      confirmation_code: generateConfirmationCode(),
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookingByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const booking = await Booking.findOne({
      where: { confirmation_code: code },
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Réservation non trouvée",
      });
    }

    res.json({
      success: true,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookingsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const bookings = await Booking.findAll({
      where: {
        email: email.toLowerCase(),
      },
      order: [["booking_date", "DESC"]],
    });

    res.json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};
