// Ionic Starter App

var example = angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})
// the controller determines what will be shown in the view the html part
// it is called Home Tab Controller
/* the controller and view share an object called a scope;
this object is at the core of its amazing two-way data binding.
The controller sets properties on the scope, and the view binds to those properties.
*/
.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});

Parse.initialize("ZunQGkmJDa2Ec6QY24E8jmqqkn8RzhcHKiwOcY6O", "wI4KKjeRqOlHAZRfnpGoypCveD6ZcbNopeDnYMuv");
Parse.User.enableRevocableSession()

example.controller("ExampleController", function($scope) {

var Post = Parse.Object.extend("Post");

$("#signup").submit(function(event){
  event.preventDefault();

    var name = $("#signup-name").val();
    var pass = $("#signup-password").val();

    var user = new Parse.User();
    user.set("username", name);
    user.set("password", pass);

    user.signUp(null, {
      success: function(user){
        //console.log("signup success:"+success.message);
      }, error: function(user, error){
        console.log("signup error:"+error.message);
      }
    });
  });

function getPosts() {
  var query = new Parse.Query(Post);
  query.find({
    success: function(results){
      var output ="";
      for (var i in results){
          var title = results[i].get("title");
          var content = results[i].get("content");
          output += "<li>";
          output += "<h3>"+title+"</h3>";
          output += "<p>"+content+"</p>";
          output += "</li>";
          //console.log("Title:"+title)
      }
      $("#list-posts").html(output);
    }, error: function(error){
      console.log("Query Error:"+error.message);
    }
  });
}

getPosts();

$("#post-form").submit(function(event){
  event.preventDefault();
    var title = $("#post-title").val();
    var content = $("#post-content").val();

    var newPost = new Post();
    newPost.set("title", title);
    newPost.set("content", content);

    newPost.save({
      success: function(){

      }, error: function(error){
          console.log("Error:" +error.message);
      }
    });
  });
});
