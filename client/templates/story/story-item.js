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
  'click .storyBit'(event, instance) {
  	var $this = event.target;

    // Fancy animation on the archive elements
    $($this).closest(".storyBit").find(".excerpt").stop();
    $($this).closest(".storyBit").find(".excerpt").slideToggle(250);    
    
  }	
});