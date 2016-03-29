Template.profilePosts.onCreated(function () {
  this.editingPost      = new ReactiveVar(null);
  this.commentingOnPost = new ReactiveVar(null);
});

Template.profilePosts.helpers({
  editingPost: function () {
    return this._id === Template.instance().editingPost.get();
  },

  commentingOnPost: function () {
    return this._id === Template.instance().commentingOnPost.get();
  }
});

Template.profilePosts.events({
  'click .edit-post': function () {
    Template.instance().editingPost.set(this._id);
  },

  'click #update-post-cancel': function () {
    Template.instance().editingPost.set(null);
  },

  'click #update-post-save': function (event,template) {
    var newContent = $('#edit-post-container').find('.froala-view').html();
    // Update the post and hide the text editor
    Posts.update(this._id, { $set: { content: newContent } }, function (err) {
      if(!err) template.editingPost.set(null);
    })
  },

  'click .delete-post': function() {
    var postId = this._id;
    console.log(this)
    if(confirm('Are you sure you want to delete this update?')) {
      Posts.remove(postId);
    }
  },

  'click .delete-comment': function() {
    var postId = this._id; // this is the _id of the post
    var comments = this.comments; // comments array within the post
    var comment = this.comments[0]; // first comment of the post OR all comments if the
    // data context is set to the post, by having the target, in this case <i>
    // outside the #each comments loop. Treating all the comments together.
    var commentId = this.comments[0]._id; // _id of the first comment of the post OR all comments

    console.log(this)
    if(confirm('Are you sure you want to delete this update?')) {
      // Posts.remove(commentId);
      Posts.update( postId, { $pop: {  comments : commentId } } );

    }
  },

  'click .leave-comment': function () {
    Template.instance().commentingOnPost.set(this._id);
  },

  'click #create-comment-save': function (event, template) {
    var commentContent = $('#comment-text-area').find('.froala-view').html();
    if(commentContent.trim().length === 0) return;

    Posts.update(this._id, { $push: {
      comments: {
         _id: Random.id(),
        content: commentContent,
        createdAt: new Date(),
        userId: Meteor.userId()
      }
    }}, function (err) {
      if(!err) template.commentingOnPost.set(null);
    });
  },

  'click #create-comment-cancel': function () {
    Template.instance().commentingOnPost.set(null);
  },

  'click .comment-body': function(e, t) {
    e.preventDefault();
    var tar = $(e.currentTarget).context.innerHTML;
    $(tar).addClass('fancybox');

    // var selfieId = $(e.currentTarget).data('id');
    // var userid = t.data.publicUser._id;
    // Router.go('publicSelfieDetails', {
    //   _id: userid,
    //   selfieid: selfieId
    // });
  }
});
