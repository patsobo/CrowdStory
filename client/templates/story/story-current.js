import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './story-current.html';

Template.storyCurrent.onCreated(function helloOnCreated() {
  this.words = new ReactiveVar("");
});

Template.storyCurrent.helpers({
  counter() {
    //return Template.instance().counter.get();
    return Stories.find().count();
  },
  words() {
    // Pull the last element in the collection
  	var story = CurrentStory.findOne({});//, {sort: {start_date: -1}});

    if (story == null) return "No stories...";
    else return story["content"];
  }
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
