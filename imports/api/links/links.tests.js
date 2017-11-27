// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Links } from './links.js';

if (Meteor.isServer) {
  describe('links collection', function () {
    it('insert correctly', function () {
      const linkId = Links.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = Links.find({ _id: linkId });
<<<<<<< HEAD
      const collectionName = added.getCollectionName();
=======
      const collectionName = added._getCollectionName();
>>>>>>> 4f829a725b729b389875cf27e5202252c3c61920
      const count = added.count();

      assert.equal(collectionName, 'links');
      assert.equal(count, 1);
    });
  });
}
