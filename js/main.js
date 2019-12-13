// ---------- Type hero paragraph ----------
var i = 0;
var text = `I am a junior front end web developer. In
recent years, I have learned more and more
about the world of web development. I
started with drag-and-drop websites,
continued to WordPress sites, and after
deciding that this is the career I want for
myself in life, I started to enrole in web
development studies.
If I had to answer the question why I would
want to work as a web developer, the
answer is for the feeling I have when I
manage to solve a problem after facing a
challenge.
I am looking to work in a company where I
can challenge myself and develop my
skills.
`;
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
