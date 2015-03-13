Meteor.methods({
  sendApplicationNotification: function(_id) {
      // _id is _id of application

      var application = Applications.findOne(_id);
      var applicant = Meteor.users.findOne(application.owner);

      var job = Jobs.findOne(application.job);
      var jobOwner = Meteor.users.findOne(job.owner);

      console.log(application);
      console.log(applicant);
      console.log(job);
      console.log(jobOwner);

      var to = jobOwner.emails[0].address;
      var html = 'New application for job: ' + application.description;

      Email.send({
        to: to,
        from: 'applications@myapp.com',
        subject: 'New Application',
        html: html
      });
    }
  })