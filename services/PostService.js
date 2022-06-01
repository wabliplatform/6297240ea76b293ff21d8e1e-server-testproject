/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Post } = require('../models/Post');

/**
* Creates the data
*
* post Post data to be created
* returns post
* */
const createpost = ({ post }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Post(post).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* postId String the Id parameter
* no response value expected for this operation
* */
const deletepost = ({ postId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Post.findOneAndDelete({ _id:postId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllpost = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Post.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* postId String the Id parameter
* returns post
* */
const getpost = ({ postId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Post.findById(postId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* postId String the Id parameter
* post Post data to be updated (optional)
* returns post
* */
const updatepost = ({ postId, post }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Post.findOneAndUpdate({ _id:postId },post).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createpost,
  deletepost,
  getAllpost,
  getpost,
  updatepost,
};
