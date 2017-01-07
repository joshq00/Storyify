myApp.component('storyShow', {
  templateUrl: 'js/stories/storyShowComponent/storyShow.html',
  controller: function(storyService, $state, $stateParams) {
    console.log('hello from storyShow component');
    this.story = null;

    this.edit = function() {
      $state.go('storyEdit', { id: this.story._id });
    };

    storyService.getStory($stateParams.id)
    .then( res => {
      this.story = res.data;
    });
  }
});
