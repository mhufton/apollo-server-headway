const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    async allLinks(root, args, { models }) {
      return models.url.findAll();
    }
    async getLink(root, { url }, { models }) {
      return models.url.fineOne(url);
    }
    async allSlugs(root, args { models }) {
      return models.slug.findAll();
    }
    async getSlug(root, { slug }, { models }) {
      return models.slug.findOne(slug)
    }
  }
};

module.exports = resolvers;
