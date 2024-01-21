'use strict';

/**
 * customer-care service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-care.customer-care');
