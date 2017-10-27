$(document).ready(function() {
	// ================= VARIABLES =========================
	
	// ARRAY OF 10 TOPICS
	var topic = [
		"Football", 
		"Soccer", 
		"Golf", 
		"Chess",
		"Hockey", 
		"Tennis", 
		"Baseball", 
		"Boxing", 
		"Basketball", 
		"Racing"
	];

	// ================= FUNCTIONS =========================

	// CREATE 10 BUTTONS FOR ARRAY TOPICS 
	function renderButtons() {
		// FOR(TOPICS.LENGTH)
		for(var i = 0; i < topic.length; i++) {
			// CREATE VAR BUTTON = BUTTON 
			var button = $("<button class='topicButton'>");
			// ADD A VALUE OF TOPIC NAME
			button.attr("value", topic[i]);
			// BUTTON .TEXT = TOPIC[I]
			button.text(topic[i])
			// #button-location .PREPEND BUTTON
			$("#button-location").prepend(button);
		}; // END LOOP
	}; // END RENDER BUTTON

	// DISPLAY 10 NON ANIMATED GIFS 
	function displayGif() {		
		// GRAB 10 STATIC NONANIMATED GIFS AND DISPLAY ON PAGE
		// LOOP FOR 10 TIMES

			// CREATE IMG TAG
				// IMAGE .ATTR VALUE = TOPIC[I]
				// IMAGE .
					// DISPLAY IMG TAG IN gif-locat ion
			


			// GRAB 10 NON ANIMATED GIFS
			// WHEN USER CLICKS ON GIFY STILL IMAGE, ANIMATE GIF
			// WHEN USER CLICKS ON GIFY STILL IMAGE, ANIMATE GIF
	}; // END DISPLAY GIF

    // ----------------- CALL FUNCTIONS ON START -----------
	
	renderButtons();

	// ================= ONCLICKS ==========================

    $($(".topicButton")).on("click", function(event) {
    	console.log($(this).attr("value")); 
    	// VALUE OF BUTTON PRESSED
    	var buttonValue = $(this).attr("value");
    	// AJAX CALL WITH BUTTON VALUE BEING SEARCHED
	    $.get(
			"https://api.giphy.com/v1/gifs/search?api_key=Km6OIYQrHThqmal2XQyxjDffS1spiIIj&q=" + buttonValue +"&limit=10&offset=0&rating=PG-13&lang=en"
	    ).done(function(response) {
	    	console.log(response);
			// CALL DISPLAYGIF (RESPONSE)
		}); // END AJAX CALL 
    }); // END ON CLICK

});

	// ================= INSTRUCTIONS ======================

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.	
	
 

// Under every gif, display its rating (PG, G, so on).
// This data is provided by the GIPHY API.

	// DISPLAY GIF RATING AT BOTTOM OF IMAGE

// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

	// CREATE FORM 
		// TAKE FORM ENTRY VALUE AND ADD IT INTO THE TOPICS ARRAY
			// CALL A FUNCTION THAT TAKES EACH TOPIC IN ARRAY AND REMAKES THE BUTTONS ON THE PAGE  




