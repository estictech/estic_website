// All links-related publications

import { Meteor } from 'meteor/meteor';
import Links from '../links.js';

Meteor.publish('links.all', function linksAll() {
  return Links.find();
});
