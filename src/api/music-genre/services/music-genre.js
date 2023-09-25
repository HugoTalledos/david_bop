'use strict';

/**
 * music-genre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-genre.music-genre');
