import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './story-current.html';

Template.storyCurrent.onCreated(function helloOnCreated() {
  this.words = new ReactiveVar("");
  setInterval ('cursorAnimation()', 800);

});

// Animates the cursor to show the current end of the story
cursorAnimation = function() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

Template.storyCurrent.helpers({
  words() {
    // Pull the last element in the collection
  	var story = CurrentStory.findOne({});//, {sort: {start_date: -1}});

    if (story == null) return "No stories...";
    else return story["content"];
  },

  /**
   * Returns a list of all posts available to the current user.
   */
  'daysLeft': function() {
    // get the end date of the current story
    var end_date = CurrentStory.findOne({})["end_date"];
    var current_date = new Date();

    // convert the milliseconds into days, rounded up
    return Math.ceil((end_date.getTime() - current_date.getTime()) / (1000*60*60*24));
  },
});

Template.storyCurrent.events({
  'click .buttonDelete'(event, instance) {
    // Delete EVERYTHING
    Meteor.call("deleteStories");
  },
  'click .buttonCreate'(event, instance) {
    // Delete EVERYTHING
    Meteor.call("createStory");
  },  

  'submit form': function(post, instance) {
  	console.dir(post);
  	post.preventDefault();

    // Check if you should post on new paragraph
    if (document.getElementById('buttonNewline').checked) {
      post.target.addition.value = '\n\n' + post.target.addition.value;
    }
  	
    // Update the story (TEMP, to be replaced with database)
    //instance.words.set(instance.words.get() + String(post.target.addition.value));
    
    // Save story to database
    Meteor.call("updateStory", post.target.addition.value);

    // Clear the text area
    post.target.addition.value = "";
  },

});
