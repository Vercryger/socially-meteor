Meteor.publish('all_parties', function() {
  return Parties.find();
});