Applications = new Mongo.Collection('applications')

Applications.attachSchema(new SimpleSchema({
  description: {
    type:String,
    max: 200,
    label: "Why do you want this job ?",
    autoform:{
      row:5
    }
  },

  job:{
    type:String,
    autoform: {
      omit:true
    }
  },

  owner:{
    type:String,
    autoform:{
      omit:true
    },

    autoValue: function(){
      if (this.isInsert){
        return Meteor.userId();
      }
    }
  }
}));