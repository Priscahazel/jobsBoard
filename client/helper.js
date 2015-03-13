Template.registerHelper('User',function(){
  return Meteor.user();
})

Template.registerHelper('ownJobsCount',function(){
  return Jobs.find({owner: Meteor.userId()}).count();
})

Template.registerHelper('getImage',function(picture){
  return Images.findOne(picture).url();
})