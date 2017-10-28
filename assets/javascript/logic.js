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
        // EMPTY THE BUTTON LOCATION
        $("#button-location").empty();
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
            $("#button-location").append(button);
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
            img.attr("class", "gifImg");
            // CREATE P ELEMENT
            var p = $("<p>");
            // ADD THE RATING TO THE P TAG 
            p.text("Rating: " + apiObject.data[i].rating);
            // CAREATE DIV TAG 
            var div = $("<div>");
            // GIVE DIV AN ID FOR STYLNG
            div.attr("id", "img" + (i + 1));
            // ADD THE IMG TO THE DIV TAG
            div.append(img);
            // ADD THE P TAG TO THE DIV TAG
            div.append(p);
            // DISPLAY IMG TAG IN gif-location
            $("#gif-location").append(div);
        } // END IMG LOOP
    }; // END DISPLAY GIF

    // ----------------- CALL FUNCTIONS ON START -----------

    renderButtons();

    // ================= ONCLICKS ==========================

    // CLICK THE TOPIC BUTTON TO GENERATE GIFS
    $(document).on("click", ".button-topic", function(event) {
        console.log($(this).attr("value"));
        // VALUE OF BUTTON PRESSED
        var buttonValue = $(this).attr("value");
        // AJAX CALL WITH BUTTON VALUE BEING SEARCHED
        $.get( // GIFY API URL 
            "https://api.giphy.com/v1/gifs/search?api_key=Km6OIYQrHThqmal2XQyxjDffS1spiIIj&q=" + buttonValue + "&limit=10&offset=0&rating=R&lang=en"
        ).done(function(response) {
            // SHOW THE API OBJECT IN CONSOLE
            console.log(response);
            // CALL DISPLAYGIF (OBJECT)
            displayGif(response, buttonValue);
        }); // END AJAX CALL 
    }); // END ON CLICK

    // SUBMIT BUTTON TO ADD THE BUTTON 
    $("#submit").on("click", function(event) {
        // KEEP THE PAGE FROM RELOADING 
        event.preventDefault();
        // GET THE NAME ADDED
        var topicName = $("#topic-name").val();
        // PUSH THE TOPIC TO ARRAY
        topic.push(topicName);
        // ADD THE TOPIC BUTTON
        renderButtons();
    }); // END ON CLICK

    // GIF ON CLICK TO CHANGE THE STATE
    $(document).on("click", ".gifImg", function(e) {
        // GET THE STATE OF THE IMG
        var state = $(this).attr("data-state");
        // IF IMG STILL CHANGE TO ANIMIMATED
        if (state === "still") {
            // MAKE THIS IMG SRC THE ANIMATED LINK
            $(this).attr("src", $(this).attr("data-animate"));
            // CHANGE THE STATE TO BE READY NEXT TIME
            $(this).attr("data-state", "animate");
        } else { // ELSE CHANGE TO STILL
            // MAKE THIS IMG SRC THE STILL LINK
            $(this).attr("src", $(this).attr("data-still"));
            // CHANGE THE STATE TO BE READY NEXT TIME
            $(this).attr("data-state", "still");
        };
    });

}); // END ON READY START FUNCTION