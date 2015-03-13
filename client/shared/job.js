Template.job.events({
  'click .btn-delete': function (e,t) {
    var _id = this._id;
    Jobs.remove(_id);
  }
});