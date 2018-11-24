
var app = angular.module("myApp", ["ngRoute"]);


app.config(function($routeProvider){

	$routeProvider
	.when('/Home', {
    templateUrl : "Home.html"
  })
  .when('/AboutMe', {
    templateUrl : "AboutMe.html"
  })
  .when('/Experience', {
    templateUrl : "Experience.html"
  })
  .when('/Skills', {
    templateUrl : "Skills.html"
  })
  .when('/Projects', {
    templateUrl : "Projects.html"
  })
  .when('/Education', {
    templateUrl : "Education.html"
  })
  .when('/Resume', {
    templateUrl : "Resume.html",
    controller : "ResumeCtrl"
  })
  .when('/Contact', {
    templateUrl : "Contact.html"
  })
  .when('/Work',{
    templateUrl : "Work.html"
  })
  .otherwise({redirectTo: "/Home"});
});

app.controller("ResumeCtrl", ['$scope',function($scope)
{
   $scope.education = true;
   $scope.experience = false;
   var element = document.getElementsByTagName("LI");
   for(var i=0; i<element.length; i++)
   {
      element[i].addEventListener("click", function()
      {
        var current = document.getElementsByClassName("activeli");
        if(current.length != 0)
        {
            current[0].className = current[0].className.replace("activeli", "");
        }
        this.className = "activeli";
      });
   }

   $scope.ExpeFunc = function(){
       $scope.education = true;
       $scope.experience = false;
   };
   $scope.EduFunc = function(){
       $scope.experience = true;
       $scope.education = false;
   };
}]);