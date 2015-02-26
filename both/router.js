Router.configure({
  layoutTemplate:"masterLayout",
  routeControllerNameConverter:"camelCase",
  notFoundTemplate:"404"
});

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                        // name is an arbitrary value. Useful for helpers
});



Router.route('/jobs', function () {
  this.render('jobs');
}, {
  name: 'jobs',

  data: function() {                // Data context for the route. Allows properties of retuned
    return {                        // objects to be rendered in tempate e.g. {{pageTitle}}
    jobs: Jobs.find().fetch(), 
    pageTitle: 'This is my jobs page'
  }
}
});

Router.route('/jobs/:category/', function(){
  this.render('jobs');          // Render the same template as '/projects' route
}, {
  name: 'jobsCategory',

  data: function(){
    return {                        // Return only documents with the category in the parameters
      jobs: Jobs.find({category: this.params.category}).fetch(),
      pageTitle: 'Category: ' + this.params.category
    }
  }
})

Router.route('/jobs/details/:_id', function(){
  this.render('jobsDetail');
},{
  name: 'jobsDetail',

  data: function(){
    var _id = this.params._id;

    return {
      jobs: Jobs.findOne(_id),
      applications: Applications.find({jobs:_id}).fetch()
    }
  }
});

Router.route('/jobs/:_id/edit',function(){
  this.render('editJobs');
},{
  name: 'editJobs',
  data: function(){
    var _id = this.params._id;
    return {
      jobs: Jobs.findOne(_id)
    }
  }
})

Router.route('dashboard', function () {
  this.render('dashboard');
}, {
  name: 'dashboard',
  data: function(){
    return {
      jobs: Jobs.find({owner: Meteor.userId()}).fetch(),
      
    }
  }
});



Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});