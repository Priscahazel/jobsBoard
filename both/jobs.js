Jobs = new Mongo.Collection("jobs");

Jobs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  summary: {
    type: String,
    // placeholder: 'type',
    label: "Brief summary",
    optional: true,
    max: 1000,
    autoform: {
      rows: 5
    }
  },
  category: {
    type: String,
    autoform: {
      options: function(){
        return [
        {value: 'html', label: 'HTML'},
        {value: 'javascript', label: 'JavaScript'},
        {value: 'css', label: 'CSS'}
        ]
      }
    }
  },

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Choose file'
  },

  owner: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function(){
      return Meteor.userId();
    }
  }
}));
