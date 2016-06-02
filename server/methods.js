import { Meteor } from 'meteor/meteor';

Meteor.methods({
	/**
	 * Updates the current story with whatever the current user is doing
	 *
	 * @param post The current story to be updated, as text
	 */
	'updateStory': function(addendum) {
		var currentContent = CurrentStory.findOne({})["content"];

		// The empty curly braces mean update the first document (there's only one, anyway)
		CurrentStory.update({},		
		{
			$set:
			{
				content: currentContent + addendum
			}
		});
	},

	/**
	 * Deletes all stories.
	 */
	'deleteStories': function() {
		Stories.remove({});
	},

	/**
	 * Creates the new story for the week, and saves the current one to the archives
	 *
	 * @param post The story to be created, as text
	 */
	'createStory': function() {
		// Add the completed story to the archives
		if (CurrentStory.find().count() != 0) Stories.insert(CurrentStory.findOne({}));
		CurrentStory.remove({});

		var date = new Date();
		CurrentStory.insert({
			content: "",
			start_date: date,
			end_date: new Date(date.getTime() + 7*24*60*60*1000)	// one week later
		});
	}
});
