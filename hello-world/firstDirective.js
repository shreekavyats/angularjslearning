/*
Directive: Element
(function() {
    var app = angular.module("superhero", [])

    app.directive("superman", function() {
        return {
            restrict: "E",
            template: "<div> Here I am to save the day </div>"
        }
    })
})();*/
/*(function() {
    var app = angular.module("superhero1", [])

    app.directive("supermantest", function() {
        return {
            restrict: "A",
            link: function() {
                alert("I'm working");
            }
        };
    });
})();*/
var app = angular.module("superhero", [])

app.directive("superman", function(){
  return {
   restrict: "A",
   link: function(){
       alert("I'm working faster");
     }
  };
});

app.directive("flash", function(){
  return {
   restrict: "A",
   link: function(){
       alert("I'm working Stronger");
     }
  };
});

//To recap: “E” is for element, “A” is for attribute, “C” is for class, and “M” is for comment.
//Attributes are going to be the main ones as far as adding behaviors that get used the most. 
//dIf you don’t specify the restrict property it will default to “A”
