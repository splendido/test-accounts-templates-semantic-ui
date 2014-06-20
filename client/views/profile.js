
Template.profile.helpers({
	name: function(){
		return Meteor.user().profile.name;
	},
	email: function(){
		var user = Meteor.user();
		if (user.emails && user.emails[0])
			return Meteor.user().emails[0].address;
	},
	phone: function(){
		return Meteor.user().profile.phone;
	},
});