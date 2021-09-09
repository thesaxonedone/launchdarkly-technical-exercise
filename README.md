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
3.  Run the application
```console
node index.js
```
4.  Modify the user->key attribute to 'user2' to see the feature be excluded due to my basic implementation of targeting

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
