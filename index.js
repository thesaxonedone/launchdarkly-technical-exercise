//Connect to launch darkly
var LaunchDarkly = require('launchdarkly-node-server-sdk');
var ldclient = LaunchDarkly.init('sdk-d9ea449d-7652-431d-a8fa-9275875a8013');
var user = {
  key: 'user2',
  custom: {
    groups: 'beta_testers'
  }
};


//Main execution:



ldclient.once('ready', function() {

  console.log('');
  console.log('');
  console.log('This text represents an old feature that already exists in our app');
  console.log('');

  ldclient.variation('greytest', user, false, function(err, showFeature) {
    // console.log("SDK successfully connected! The value of greytest is " + showFeature + " for " + user.key)
    if (showFeature === true) {
      console.log('This text represents a new feature for which we are implementing feature flagging.  ' +
        'This text should only appear if we are user Ruby Rod (user key of \'user1\'), due to my basic ' +
        'implementation of targeting.   Edit the index.js file and change the user key to user2 and see this text ' +
        'disappear upon a subsequent run of the program');
    }
  });
  ldclient.flush(function() {
    ldclient.close();
  });
});

