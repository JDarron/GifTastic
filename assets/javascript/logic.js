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
        for (var i = 0; i < topic.length; i++) {
            // CREATE VAR BUTTON = BUTTON 
            var button = $("<button class='topicButton'>");
            // ADD A VALUE OF TOPIC NAME
            button.attr("value", topic[i]);
            // ADD CLASS TO BUTTON
            button.attr("class", "button-topic");
            // BUTTON .TEXT = TOPIC[I]
            button.text(topic[i]);
            // #button-location .PREPEND BUTTON
            $("#button-location").prepend(button);
        }; // END LOOP
    }; // END RENDER BUTTON

    // DISPLAY 10 NON ANIMATED GIFS 
    function displayGif(apiObject, buttonValue) {
        // CLEAR gif-location
        $("#gif-location").empty();
        // VAR AMOUNT OF IMGS
        var imgCount = 10;
        // LOOP TO CREATE 10 GIFS
        for (var i = 0; i < imgCount; i++) {
            // VAR FOR STILL IMG
            var dataStill = apiObject.data[i].images.fixed_height_still.url;
            // VAR FOR ANIMATED IMG
            var dataAnimate = apiObject.data[i].images.fixed_height.url;
            // CREATE IMG TAG
            var img = $("<img src='" + dataStill + "'>");
            // GIVE IMG AN ALT ATTR
            img.attr("alt", buttonValue);
            // IMAGE .ATTR SRC = STILLURL 
            img.attr("data-still", dataStill);
            // IMAGE .ATTR reg-url = REGURL
            img.attr("data-animate", dataAnimate);
            // IMG STATE FOR DETERMING IF ITS ANIMATED OR STILL
            img.attr("data-state", "still");            
            // GIVE IMAGE A CLASS
            img.attr("class", "gif-img");
            // DISPLAY IMG TAG IN gif-location
            $("#gif-location").prepend(img);
        } // END IMG LOOP
    }; // END DISPLAY GIF

    // ----------------- CALL FUNCTIONS ON START -----------

    renderButtons();

    // ================= ONCLICKS ==========================

    $(".button-topic").on("click", function(event) {
        console.log($(this).attr("value"));
        // VALUE OF BUTTON PRESSED
        var buttonValue = $(this).attr("value");
        // AJAX CALL WITH BUTTON VALUE BEING SEARCHED
        $.get( // GIFY API URL 
            "https://api.giphy.com/v1/gifs/search?api_key=Km6OIYQrHThqmal2XQyxjDffS1spiIIj&q=" + buttonValue + "&limit=10&offset=0&rating=PG-13&lang=en"
        ).done(function(response) {
        	// SHOW THE API OBJECT IN CONSOLE
            console.log(response);
            // CALL DISPLAYGIF (OBJECT)
            displayGif(response, buttonValue);
        }); // END AJAX CALL 
    }); // END ON CLICK

    $(".gif-img").on("click", function() {
        console.log('We in ths b****');
        // LOOKING AT THE STATE OF THE IMG
        var state = $(this).attr("data-state");
        // IF STATE IS ANIMATED OR STILL
        if (state === "still") {
            // THIS IMG SRC CHANGED TO ANIMATE
            $(this).attr("src", $(this).attr("data-animate"));
            // CHANGE STATE TO INICATE ANIMATE
            $(this).attr("data-state", "animate");
        } else { // ELSE CHANGE TO STILL
            // THIS IMG SRC CHANGED TO STILL
            $(this).attr("src", $(this).attr("data-still"));
            // CHANGE STATE TO INICATE STILL
            $(this).attr("data-state", "still");
        }; // END IF STATEMENT
    }); // END ON CLICK
}); // END ON READY START FUNCTION

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