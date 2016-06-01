import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './story.html';

Template.story.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.words = new ReactiveVar("");
});

Template.story.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  words() {
  	return Template.instance().words.get();
  }
});

Template.story.events({
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
  	
    // Update the story
    instance.words.set(instance.words.get() + String(post.target.addition.value));

    // Clear the text area
    post.target.addition.value = "";
  },

});
