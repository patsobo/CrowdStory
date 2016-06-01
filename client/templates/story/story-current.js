import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './story-current.html';

Template.storyCurrent.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.words = new ReactiveVar("");
});

Template.storyCurrent.helpers({
  counter() {
    //return Template.instance().counter.get();
    return Stories.find().count();
  },
  words() {
    // Pull the last element in the collection
  	var story = Stories.find({}, { sort: {natural: -1, limit: 1}});
    //console.log(story.size());
    if (story == -1 || story == null) return "Couldn't find...";
    else return story["content"];
  }
});

Template.storyCurrent.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    //console.log("WORDS: " + instance.words.get());
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
