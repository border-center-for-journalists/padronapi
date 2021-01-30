/**
 * Municipio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
 dontUseObjectIds: true,
  attributes: {
    nombreMunicipio: {type: 'string'},
    nombreEntidad: {type: 'string'},
    nombreCabecera: {type: 'string'},
  },
};
