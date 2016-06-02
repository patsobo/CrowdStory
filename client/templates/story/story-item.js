Template.storyItem.helpers({
	/**
     * Returns a list of all posts available to the current user.
     */
	'displayDate': function(date) {
		var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];

		return monthNames[date.getMonth()] + " " + date.getDate() + ", "  + date.getFullYear();
	},
});

Template.storyItem.events({
});