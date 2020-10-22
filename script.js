const people = [
  {
    name: "Doug Ford",
    img: "./assets/doug-ford-17.png",
    bio:
      "Canadian businessman and politician serving as the 26th premier of Ontario.",
  },
  {
    name: "Drake",
    img: "./assets/drake.jpg",
    bio:
      " Canadian rapper, singer, songwriter, actor, record producer, and entrepreneur. ",
  },
  {
    name: "Wayne Gretzky",
    img: "./assets/wayne.jpg",
    bio:
      "Canadian former professional ice hockey player and former head coach.",
  },
  {
    name: "Leslie Nielsen",
    img: "./assets/leslie.jpg",
    bio: "Canadian actor, comedian and producer",
  },
  {
    name: "Alphonso Davies",
    img: "./assets/davies.jpg",
    bio:
      "Canadian professional soccer player who plays for Bayern Munich and the Canada national team.",
  },
];

let i = 0;
let mySwipe;
let hisSwipe;

function showCard(e = null) {
  if (i < people.length) {
    //shows cards
    $(".card h2").text(people[i].name);
    $(".card img").attr("src", people[i].img);
    $(".card img").attr("alt", people[i].name);
    $(".info p").text(people[i].bio);
  } else {
    //after last card shows results
    $(".card").css("display", "none");
    $(".matches").css("display", "block");
    $(".controls").css("display", "none");
    $(".again").css("display", "block");
  }
  //generates random 'swipe' from a celebrity
  hisSwipe = Math.floor(Math.random() * 2);

  if (e && i < people.length) {
    //determines whether user 'swiped' left or right
    switch ($(e.currentTarget).attr("class")) {
      case "swipeRight":
        mySwipe = 1;
        break;
      case "swipeLeft":
        mySwipe = 0;
        break;
    }
    //if it's a match, name of a celebrity added to the "results" ul
    if (mySwipe === hisSwipe) {
      $(".matches ul").append(
        `<li><i class="fab fa-canadian-maple-leaf"></i> ${people[i].name}</li>`
      );
    }
  }
  i++;
}

function startAgain() {
  i = 0;
  $(".card").css("display", "block");
  $(".controls").css("display", "flex");
  $(".again").css("display", "none");
  $(".matches ul").text("");
  $(".matches").css("display", "none");
  showCard();
}

showCard();

$(".controls button").on("click", showCard);
$(".again").on("click", startAgain);
