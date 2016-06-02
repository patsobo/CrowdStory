Stories = new Mongo.Collection('stories');
CurrentStory = new Mongo.Collection('currentStory', {capped: true, size: 1});	// size of one