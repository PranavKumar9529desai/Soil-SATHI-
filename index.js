// var selected_card = document.querySelectorAll(".card");
// var ans = [];
// for (var i = 0; i < selected_card.length; i++) {
//   selected_card[i].addEventListener("click", function (event) {
//     alert("i got clicked");
//     console.log(this);
//     var title = this.querySelector(".card-title").textContent;
//     ans.push(title);
//   });
// }



// creating a variable to store the only the card titles of the selected cards (clicked cards)
var selected_card = document.querySelectorAll(".card");
var ans = [];
for (var i = 0; i < selected_card.length; i++) {
  selected_card[i].addEventListener("click", function (event) {
   
    var title = this.querySelector(".card-title").textContent;

    // deselect the cardd if clicked once again
    if (this.classList.contains("selected")) {
      ans.splice(ans.indexOf(title), 1);
      this.classList.remove("selected");
    } else {
      ans.push(title);
      this.classList.add("selected");
    }
  });
}




var homeLink = document.querySelector('.home-link');
homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  alert('You are already on the home page');
});



