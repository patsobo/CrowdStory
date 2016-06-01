import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './story-archive.html';

Template.storyArchive.helpers({
    /**
     * Returns a list of all posts available to the current user.
     */
	'stories': function() {
		return Stories.find();
	},
});

Template.storyArchive.events({
});
