import Artist from '../models/Artist.js';

export const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll({
      // order: [['order', 'ASC']]
    });

    res.json({
      success: true,
      count: artists.length,
      data: artists
    });
  } catch (error) {
    next(error);
  }
};

export const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByPk(id);

    if (!artist) {
      return res.status(404).json({
        success: false,
        message: 'Artist not found'
      });
    }

    res.json({
      success: true,
      data: artist
    });
  } catch (error) {
    next(error);
  }
};

