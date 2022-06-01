/**
 * The PostController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PostService');
const createpost = async (request, response) => {
  await Controller.handleRequest(request, response, service.createpost);
};

const deletepost = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletepost);
};

const getAllpost = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllpost);
};

const getpost = async (request, response) => {
  await Controller.handleRequest(request, response, service.getpost);
};

const updatepost = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatepost);
};


module.exports = {
  createpost,
  deletepost,
  getAllpost,
  getpost,
  updatepost,
};
