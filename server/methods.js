Meteor.methods({
	/**
	 * Updates the current story with whatever the current user is doing
	 *
	 * @param post The current story to be updated
	 */
	'updateStory': function(story) {
		//Meteor.users.update({ _id: Meteor.user()._id },
		//{
		//	$push: {
		//		favorites: post
		//	}
		//});
	},

	/**
	 * Submits the story for the week to the archives
	 *
	 * @param post The post to be created
	 */
	'submitStory': function(story) {
		//Stories.insert({
			//title: post.title,
		//});
	},

	/**
	 * Creates the new story for the week
	 *
	 * @param post The story to be created
	 */
	'createStory': function(story) {
		//Stories.insert({
			//title: post.title,
		//});
	},
});
