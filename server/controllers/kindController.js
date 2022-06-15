const { Kind } = require("../models/models");
const ApiError = require("../error/ApiError");

class KindController {
  async create(req, res) {
    const { name } = req.body;
    const kind = await Kind.create({ name });
    return res.json(kind);
  }

  async getAll(req, res) {
    const kinds = await Kind.findAll();
    return res.json(kinds);
  }
}

module.exports = new KindController();
