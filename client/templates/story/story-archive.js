import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './story-archive.html';

Template.storyArchive.helpers({
	counter() {
		//return Template.instance().counter.get();
		return Stories.find().count();
	},
		
    /**
     * Returns a list of all posts available to the current user.
     */
	'stories': function() {
		return Stories.find({}, { sort: { start_date: -1 } });
	},
});

Template.storyArchive.events({
});
