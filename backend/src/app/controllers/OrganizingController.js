import Meetup from '../models/Meetup';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const myMeetups = await Meetup.findAll({
      where: { user_id: req.userId },
      include: [{ model: File }],
    });
    return res.json(myMeetups);
  }
}
export default new OrganizingController();
