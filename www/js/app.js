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



Parse.initialize("VeOAN2nRQDXf2CJ1aypkAeVGIhHbSuI05b1Hwlgd", "BhlQJ6JTZ9mV0kBhViVOKeFPddNKubrz5camfsS8");

example.controller("ExampleController", function($scope) {

var Post = Parse.Object.extend("Post");

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
    var geoPoint = $("#post-geoPoint").val();

    var newPost = new Post();
    newPost.set("title", title);
    newPost.set("content", content);
    newPost.set("geoPoint", geoPoint);

    newPost.save({
      success: function(){

      }, error: function(error){
          console.log("Error:" *error.message);
      }
    });
});

});



/*
Parse.GeoPoint.current({
    success: function (point) {
        //use current location
        console.log(point);
    }
});
*/
