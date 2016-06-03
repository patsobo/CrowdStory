Template.storyItem.helpers({
	/**
     * Displays the date in a cleaner format.
     */
	'displayDate': function(date) {
		var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];

		return monthNames[date.getMonth()] + " " + date.getDate() + ", "  + date.getFullYear();
	},
});

Template.storyItem.events({
  'click .storyBit .date'(event, instance) {
  	// Grab the story text
	var excerpt = $(event.target).closest(".storyBit").find(".excerpt");

    // Fancy animation on the archive elements
    excerpt.stop();
    excerpt.slideToggle(250);    
    
    excerpt.scrollTop(excerpt.height());
  }	
});