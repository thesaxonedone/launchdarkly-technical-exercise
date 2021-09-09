# launchdarkly-technical-exercise
Steps to run:

These steps assume you have a working install of NodeJS.   If not, you will need to install NodeJS and appropriately integrate it with your shell/terminal program

1.   From terminal, pull down repo to a directory of your choosing
```console
git pull https://github.com/thesaxonedone/launchdarkly-technical-exercise
```   
2.  cd to that directory and install package dependencies
```console
npm install
```   
3.  Run the application and note the output
```console
node index.js
```
4.  Modify the user->key attribute to 'user2' and run the application via ```node index.js``` again to see the feature be excluded due to my basic implementation of targeting, and note the output

i.e. change
```javascript 
var user = {
  key: 'user1',
  custom: {
    groups: 'beta_testers'
  }
};
```
to
```javascript
var user = {
  key: 'user2',
  custom: {
    groups: 'beta_testers'
  }
};
```

Notes to the reviewer, while the instructions in the assignment had a blurb that said:

Upload your solution to a public GitHub repo and be sure to include instructions on how to set up the 
sample implementation. The instructions need to provide in detail how the reader can set the example 
up locally on their machine. **Be sure to include call-outs where the SDK key needs to be replaced, 
as well as the feature flag that needs to be re-created by the user.**

The API docs indicated that the mobile SDK keys are for read-only operations (https://apidocs.launchdarkly.com/#section/Overview)
and therefore represent minimal security risk in this demo application that contains no sensitive data - or at least that is my
assessment.  Consequently, I have left my SDK keys embedded in the code so that you can more readily see my implementation.  If there is something I am missing such that this key being embedded is a problem, let me know.

If you do in fact want to change over to using your own Launchdarkly environment, then you will need to do the following
1.  Replace the SDK key in line 3 of index.js to your own SDK key
2.  Create a feature flag where the key and name are specified as 'greytest', and leave all the other settings as defaults
3.  Run the application from your terminal via ```node index.js``` twice - once with the user.key attribute (in line 5 of index.js) set to 'user1' and again 
with user.key set to 'user2' to cause the users to be registered/recognized within the LaunchDarkly webUI
4.  Modify the targeting settings in the LaunchDarkly WebUI such that 'user1' has the feature set to 'true' and 'user2' has the feature set to 'false'


