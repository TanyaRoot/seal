var sliderElemMass = ["01", "02", "03"];

var sliderElem = document.getElementsByClassName("radioButtons");
var sliderButtons = document.getElementsByClassName("sliderSome");

document.addEventListener('DOMContentLoaded', () => {

  for (var i = 0; i < sliderElem.length; i++) {
    sliderElem[i].addEventListener('click', (e) => {
      // console.log(e.target.value);
      document.getElementById('sliderPic').innerHTML =
        '<img src="img/' + sliderElemMass[e.target.value] + '.jpg">';
    })
  }

  for (var i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener('click', (e) => {
      var calc = +document.getElementById('sliderPic').innerHTML.toString().slice(15, 16);

      if (e.target.id === 'sliderNext') {
        calc = calc === 3 ? 1 : calc + 1;
      } else {
        calc = calc === 1 ? 3 : calc - 1;
      }

      document.getElementById('sliderPic').innerHTML =
        '<img src="img/0' + calc + '.jpg">';
    })
  }

  // слайдер2
  var slid2buts = document.getElementsByClassName("radioButtons2");
  var pictures = document.getElementsByClassName("box2pic");
  // console.log(document.getElementsByClassName("radioButtons2"));

  for (var i = 0; i < slid2buts.length; i++) {
    slid2buts[i].addEventListener('click', function(e) {
        for(let i = 0; i < pictures.length; i++) {
          pictures[i].style.opacity = "0"
        }
        document.getElementById('box2pic' + e.target.value).style.opacity = '1';
    })
  };
});
