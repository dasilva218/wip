import Users from '../models/users';
/**
 * @param {*} req
 * @param {*} res
 * @returns
 * ! post : http://localhost:3000/api/users
 */
export async function post_user(req, res) {
  try {
    //contenu du formulaire
    const formData = req.body;
    if (!formData)
      return res
        .status(404)
        .json({ error: "Aucune données n'as été soumise" });

    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export async function get_user(req, res) {
  try {
    const user = await Users.findOne({
      username: req.query.user,
    });

    if (!user)
      return res.status(404).json({ error: 'Data not Found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}
