import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './storyAddition.html';

Template.storyAddition.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.storyAddition.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.storyAddition.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
