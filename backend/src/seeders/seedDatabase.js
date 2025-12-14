import "dotenv/config";
import models, { sequelize } from "../models/index.js";
import { generateConfirmationCode } from "../utils/generateCode.js";


const { Artist, EventInfo, Booking } = models;

const seedDatabase = async () => {
  try {
    console.log("Starting database seeding...");

    await sequelize.sync({ force: true });
    console.log("Database synced");

    const eventData = {
      name: "La Grande Soirée Gnawa",
      description:
        "Une soirée culturelle célébrant le patrimoine musical Gnawa à Agadir.",
      date: new Date("2025-12-20T22:00:00.000"),
      venue: "Scène Principale",
      city: "Agadir",
      price: 200.0,
      banner_url: "https://i.pinimg.com/1200x/4f/ce/06/4fce0670901872c0a9ba7e4795a0d51b.jpg",
      status: "upcoming",
    };

    await EventInfo.create(eventData);
    console.log(`Event info created`);

    const artistsData = [
      {
        name: "Maâlem Hassan Boussou",
        bio: "Maître Gnawa reconnu internationalement...",
        genre: "Gnawa",
        performance_time: "19:30:00",
        performance_duration: 60,
        stage: "Scène Principale",
        order: 1,
      },
      {
        name: "Groupe Bnat Houariyat",
        bio: "Collectif féminin révolutionnant la scène Gnawa",
        genre: "Gnawa",
        performance_time: "20:45:00",
        performance_duration: 60,
        stage: "Scène Principale",
        order: 2,
      },
      {
        name: "Groupe Bnat Houariyat",
        bio: "Collectif féminin révolutionnant la scène Gnawa",
        genre: "Gnawa",
        performance_time: "20:45:00",
        performance_duration: 60,
        stage: "Scène Principale",
        order: 2,
      },
      {
        name: "Groupe Bnat Houariyat",
        bio: "Collectif féminin révolutionnant la scène Gnawa",
        genre: "Gnawa",
        performance_time: "20:45:00",
        performance_duration: 60,
        stage: "Scène Principale",
        order: 2,
      },
    ];

    const artists = await Artist.bulkCreate(artistsData);
    console.log(`${artists.length} artists created`);

    const bookingsData = [
      {
        name: "Zakaria Benali",
        email: "zakaria@example.com",
        phone: "0612345678",
        number_of_seats: 2,
        ticket_category: "vip",
        total_price: 400.0,
        confirmation_code: generateConfirmationCode(),
        status: "confirmed",
        booking_date:"12/12/2025"
      },
      {
        name: "Fatima Zahra",
        email: "fatima@example.com",
        phone: "0698765432",
        number_of_seats: 1,
        ticket_category: "standard",
        total_price: 50.0,
        confirmation_code: generateConfirmationCode(),
        status: "confirmed",
        booking_date:"12/12/2025"
      },
    ];

    const bookings = await Booking.bulkCreate(bookingsData);
    console.log(`${bookings.length} sample bookings created`);

    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
