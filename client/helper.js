Template.registerHelper('User',function(){
  return Meteor.user();
})

Template.registerHelper('ownJobsCount',function(){
  return Jobs.find({owner: Meteor.userId()}).count();
})

