AutoForm.hooks({
  editJobs: {
    onSuccess: function(operation, result, template) {
      Router.go('jobs');
    }
  }
});