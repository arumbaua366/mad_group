$(document).ready(function() {
<<<<<<< HEAD
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/user_data").then(function(data) {
    console.log("data: ", data)
   $("#member-name").text(data.email);
  //window.location=("/")

=======
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function(data) {
	  $(".member-name").text(data.email);
	});
>>>>>>> andrea
  });
  