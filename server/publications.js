// currently useless since I still have autopublish on

Meteor.publish('stories', function() {
	return Stories.find({},  { sort: { start_time: -1 } });
});