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
        name: "Hamid El Kasri",
        bio: "Hamid El Kasri est l’un des plus grands maâlems de la musique Gnawa contemporaine. Né à Ksar El Kébir et formé dans la pure tradition Gnawa, il perpétue cet héritage spirituel et musical depuis plus de quatre décennies. Reconnu pour sa voix grave et puissante ainsi que sa maîtrise exceptionnelle du guembri, il est considéré comme une référence incontournable du genre. Hamid El Kasri a largement contribué à la diffusion de la musique Gnawa à l’échelle internationale, tout en restant fidèle à l’authenticité des rituels et des valeurs ancestrales.",
        genre: "Gnawa Traditionnel",
        photo_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFfUTDnuVm4QIXVTLuzLafTHQFQX0kXPb9g&s",
        start_time: "21:00:00",
        end_time: "22:00:00",
        order: 1,
      },
      {
        name: "Hassan Hakmoun",
        bio: "Hassan Hakmoun est un maâlem Gnawa et musicien international reconnu pour avoir modernisé la musique Gnawa en la fusionnant avec le jazz, le funk et les musiques du monde. Né à Marrakech, il a su porter les rythmes et la spiritualité Gnawa sur les scènes internationales tout en respectant ses racines traditionnelles. Grâce à son jeu de guembri énergique, sa voix envoûtante et ses collaborations avec de nombreux artistes internationaux, Hassan Hakmoun est devenu une figure emblématique de la Gnawa moderne et un pont culturel entre le Maroc et le reste du monde.",
        genre: "Gnawa Fusion",
        photo_url:"https://i.pinimg.com/736x/31/b3/22/31b322404f18c185d9907561817415b9.jpg",
        start_time: "22:30:00",
        end_time: "23:30:00",
        order: 2,
      },
      {
        name: "Maalem Hassan Boussou",
        bio: "Maâlem Hassan Boussou est l’un des grands maîtres de la musique Gnawa marocaine. Issu d’une famille profondément enracinée dans la tradition Gnawa, il s’est imposé comme une figure respectée grâce à sa maîtrise du guembri et à son attachement aux rituels spirituels authentiques. À travers ses performances puissantes et chargées d’émotion, il perpétue l’héritage Gnawa avec fidélité tout en le transmettant aux nouvelles générations. Sa présence sur scène reflète la profondeur et la richesse de cette musique ancestrale.",
        genre: "Gnawa Traditionnel",
        photo_url:"https://i.pinimg.com/1200x/5a/73/be/5a73be8c2b05c8a386cb98cf2e93320d.jpg",
        start_time: "00:00:00",
        end_time: "01:00:00",
        order: 3,
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
