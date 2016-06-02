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
    console.log("COUNT" + Stories.find().count());
  	var story = Stories.findOne({}, {sort: {start_date: -1}});

    // I don't think this if statement actually works
    if (story == null) return "Couldn't find...";
    else return story["content"];
  }
});

Template.storyCurrent.events({
  'click .buttonDelete'(event, instance) {
    // Delete EVERYTHING
    Meteor.call("deleteStories");
  },

  'submit form': function(post, instance) {
  	console.dir(post);
  	post.preventDefault();

    // Check if you should post on new paragraph
    if (document.getElementById('buttonNewline').checked) {
      post.target.addition.value = '\n\n' + post.target.addition.value;
    }
  	
    // Update the story (TEMP, to be replaced with database)
    instance.words.set(instance.words.get() + String(post.target.addition.value));
    
    // Save story to database
    Meteor.call("createStory", instance.words.get());

    // Clear the text area
    post.target.addition.value = "";
  },

});
