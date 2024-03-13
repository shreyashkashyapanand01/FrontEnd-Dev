$("button").text("don't click me");
$("button").css("color", "red");
$("h1").addClass("big-title");
$("h1").click(function () {
  $("h1").css("color", "purple");
});

// $("button").click(function () {
//   $("h1").css("color", "blue");
// });

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");

$("h1").append("<button>New</button>");

$("button").on("click", function () {
  $("h1").animate({opacity:0.5} );
});
$("button").on("click", function () {
    $("h1").fadeToggle();
  });