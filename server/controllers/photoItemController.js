const uuid = require("uuid");
const path = require("path");
const { PhotoItem } = require("../models/models");
const ApiError = require("../error/ApiError");

class PhotoItemController {
  async create(req, res, next) {
    try {
      const { name, description, userId, typeId, kindId, title, alt } =
        req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const photoItem = await PhotoItem.create({
        name,
        description,
        userId,
        typeId,
        kindId,
        title,
        alt,
        img: fileName,
      });

      return res.json(photoItem);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, kindId, userId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let photoItem;
    if (!typeId && !kindId && !userId) {
      photoItem = await PhotoItem.findAndCountAll({ limit, offset });
    }
    if (typeId && !kindId && !userId) {
      photoItem = await PhotoItem.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (!typeId && kindId && !userId) {
      photoItem = await PhotoItem.findAndCountAll({
        where: { kindId },
        limit,
        offset,
      });
    }
    if (!typeId && !kindId && userId) {
      photoItem = await PhotoItem.findAndCountAll({
        where: { userId },
        limit,
        offset,
      });
    }
    if (typeId && kindId && !userId) {
      photoItem = await PhotoItem.findAndCountAll({
        where: { typeId, kindId },
        limit,
        offset,
      });
    }
    if (!typeId && kindId && userId) {
      photoItem = await PhotoItem.findAndCountAll({
        where: { kindId, userId },
        limit,
        offset,
      });
    }
    if (typeId && !kindId && userId) {
      photoItem = await PhotoItem.findAndCountAll({
        where: { typeId, userId },
        limit,
        offset,
      });
    }
    if (typeId && kindId && userId) {
      photoItem = await PhotoItem.findAndCountAll({
        where: { typeId, kindId, userId },
        limit,
        offset,
      });
    }

    return res.json(photoItem);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const photoItem = await PhotoItem.findOne({ where: { id } });
    return res.json(photoItem);
  }
}

module.exports = new PhotoItemController();
