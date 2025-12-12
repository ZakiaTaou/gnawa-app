import EventInfo from '../models/EventInfo.js';

export const getEventInfo = async (req, res) => {
  try {
    let event = await EventInfo.findOne();
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event information not found'
      });
    }

    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    next(error);
  }
};

