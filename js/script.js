/**
 * ---------------------------- *
 * ------ JavaSript File ------ *
 * --- Coded By: a7med-tal3at - *
 * ---------------------------- *
 */

//  ---------  Enjoy ❤  ---------

/***
 *
 * App Variables Definition
 *
 */

//  Buttons Calling Variabels

let btnAdd = document.querySelector(".btn-add");
let btnShow = document.querySelector(".btn-show");
let btnHidden = document.querySelector(".btn-hidden");
let btnDone = document.querySelector(".done");

// Containers Calling Variabel

let pList = document.querySelector(".pl-list");
let overLay = document.querySelector(".over-lay");

// Array of Videos

let viedos = [];

/***
 *
 * App Functions
 *
 */

// Handel Link Functions

function getVideoId(url) {
  // Get Video id from Url
  VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return url.match(VID_REGEX)[1];
}

function handel_URL(id) {
  return "https://www.youtube.com/embed/" + id + "?autoplay=1";
}

function handel_link() {
  // Get Data From The Use input
  let inpVal = document.querySelector("input[type='text']").value;
  if (!inpVal) {
    overLay.style.display = "none";
  } else {
    addNewObj(handel_URL(getVideoId(inpVal)));
  }
}

// Data Building Functions

function addNewObj(val) {
  // Create new object and append it to the list of videos
  let obj = {
    src: val,
  };
  viedos.push(obj);
}

function getNextPositon() {
  let vidlen = viedos.length;
  return !vidlen ? 0 : vidlen;
}

// Create Elements Funcitons

function createLi() {
  let li = document.createElement("li");
  li.setAttribute("class", "dis-flex");
  return li;
}

function createP(num) {
  let p = document.createElement("p");
  p.innerText = "video " + num;
  return p;
}

function createPlay(index) {
  let play = document.createElement("i");
  play.setAttribute("class", "fa fa-play");
  play.setAttribute("d-index", index);
  return play;
}

function createTrash() {
  let trash = document.createElement("i");
  trash.setAttribute("class", "fa fa-trash-o");
  return trash;
}

function createSlide() {
  let nextPos = getNextPositon(),
    li = createLi(),
    p = createP(nextPos + 1),
    play = createPlay(nextPos),
    trash = createTrash();
  li.appendChild(p);
  li.appendChild(play);
  li.appendChild(trash);
  return li;
}

// Video functions

function appendSlide(ele) {
  let uPlist = document.querySelector(".u-plist");
  uPlist.appendChild(ele);
}

function addVideo() {}

function playVideo() {}

function removeVideo() {}

// Play list GUI Handel Functions

function listEmptyCheck() {
  // Check if the ul is empty or not
  let listLen = document.querySelectorAll(".u-plist li").length;
  return !listLen;
}

function element_deActivate(element) {
  element.classList.add("deactive");
}

function element_activate(element) {
  element.classList.remove("deactive");
}

function hidePlist() {
  pList.style.left = "-335px";
}

/***
 *
 * Actions
 *
 */

// Buttons Actions

btnAdd.onclick = function () {
  overLay.style.display = "block";
  hidePlist();
};

btnShow.onclick = function () {
  pList.style.left = "0px";
};

btnHidden.onclick = function () {
  hidePlist();
};

btnDone.onclick = function () {
  handel_link();
};
