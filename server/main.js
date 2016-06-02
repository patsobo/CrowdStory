import { Meteor } from 'meteor/meteor';

// time in milliseconds for story to last
period = 7*24*60*60*1000;

Meteor.startup(() => {
  // Initialize the story loop
  Meteor.setInterval(createStory, period);
});

function createStory() {
	Meteor.call("createStory");
};