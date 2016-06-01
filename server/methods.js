import { Meteor } from 'meteor/meteor';

Meteor.methods({
	/**
	 * Updates the current story with whatever the current user is doing
	 *
	 * @param post The current story to be updated, as text
	 */
	//'updateStory': function(story) {
		//Stories.updateOne({ _id: Stories.find({}, { limit: 1, sort: natural: -1})._id },
		//{
		//	$set:
		//	{
		//		"content": story
		//	}
		//});
	//},

	/**
	 * Submits the story for the week to the archives.  Basically just gives it an end date
	 */
	//'submitStory': function() {
		//Stories.insert({
			//title: post.title,
		//});
	//},

	/**
	 * Creates the new story for the week
	 *
	 * @param post The story to be created, as text
	 */
	'createStory': function(story) {
		var date = new Date();
		Stories.insert({
			content: story,
			start_date: date,
			end_date: new Date(date + 7*24*60*60*1000)
		});
	}
});
