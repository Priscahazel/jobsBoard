Meteor.publish('jobs',function(){
  return Jobs.find();
})

Meteor.publish('singleJob',function(_id){
  return Jobs.find({_id:_id})
})

Meteor.publish('images',function(){
  return Images.find();
})

// Publishes applications for the user's job
Meteor.publish('applicationsByJob',function(_id){

  // _id is the _id of a projects
  job = Jobs.findOne(_id);

  // check user is owner of project
  if (job.owner === this.userId){
    return Applications.find({job:_id});
  } else {
    return this.ready();
  }
})

Meteor.publish('myApplications',function(){
  return Applications.find({owner: this.userId});
})

//publish all jobs in a category
Meteor.publish('jobsByCategory',function(category))
return Jobs.find({category:category})