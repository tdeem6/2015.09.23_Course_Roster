courseRoster.directive("hometext", function() {
  return {
    template: "Back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function (scope, element) {
    element.bind("click", function() {
      element.toggleClass("bg-danger");
    });
  }
});
