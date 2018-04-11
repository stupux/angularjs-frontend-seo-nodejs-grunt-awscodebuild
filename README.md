

### Getting Started
To get you started you can simply clone the repository and install the dependencies.

- We get the tools we depend upon via ```npm```, the node package manager
- We get the client-side code via ```bower```

We have preconfigured ```npm``` to automatically run ```bower install``` so we can simply do:

```shell
npm install
```

Behind the scenes this will also call ```bower install```. You should find that you have two new folders in your project.

- node_modules - contains the npm packages for the tools we need
- bower_components - contains client-side framework files

##### Run the Application
We have preconfigured the project with a simple development web server. The simplest way to start this server is:

```shell
npm start
```


## Features
- code minify 
- ngtemplates
- cdnify for dependencies
- browser live reloading
- aws codebuild ```buildspec.yml```


#### Development

Run `grunt` for building application and `grunt serve` for preview.

#### Testing

Running `grunt test` will run the unit tests with karma.


