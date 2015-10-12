The purpose of this app is basically to test new capabilities of Grails 3 and the javascript framework ReactJS

Interesting links:

* http://mrhaki.blogspot.co.uk/2013/12/grails-goodness-rendering-partial.html
* http://facebook.github.io/react/docs/getting-started.html

Instructions:

```
curl -s api.sdkman.io | bash

sdk grails install 3.1.0.M1

sudo npm install --global babel

babel grails-app/assets/javascripts/reactjs/views/src/ --watch --out-dir grails-app/assets/javascripts/reactjs/views/build/
```
