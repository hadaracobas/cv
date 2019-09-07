// ---------- Type hero paragraph ----------
var i = 0;
var text = `I am a front-end web developer with skills in HTML, CSS, Sass, JavaScript, jQuery and React.
I am passionate about mobile web design and providing an engaging user experience on all platforms.
Continual education and keeping up with the latest technology trends are both very important to me.
It isn’t uncommon to find me coding through the weekends at my favorite coffee shop. Check out my
latest projects at github.com/hadaracobas.
I look forward to applying my previous work experience in business to a new career in tech.`;
var speed = 65;

function type() {
  if(i < text.length) {
    document.getElementById("text-type").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}


// ---------- project alert box projects page ----------
function alertBox() {
  alert("You can view any project on Githab or Githab pages. Except the React Flickr Gallery project - which is only on Githab");
}
