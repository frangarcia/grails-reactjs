# TODO application with Grails 3, ReactJS and Backbone

The purpose of this app is basically to test new capabilities of Grails 3 and the javascript framework ReactJS

## Instructions:

```
curl -s api.sdkman.io | bash

sdk grails install 3.2.0

sudo npm install --global babel

babel grails-app/assets/javascripts/reactjs/views/src/ --watch --out-dir grails-app/assets/javascripts/reactjs/views/build/
```

## Interesting links:

* http://mrhaki.blogspot.co.uk/2013/12/grails-goodness-rendering-partial.html
* http://facebook.github.io/react/docs/getting-started.html
* http://upliftingcode.com/blog/2015/06/using-backbone-models-and-collections-with-react/
* https://github.com/Khan/style-guides/blob/master/style/react.md#do-not-use-backbone-models
