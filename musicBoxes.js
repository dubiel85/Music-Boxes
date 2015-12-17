var cNote = document.getElementById("c-note");
var dNote = document.getElementById("d-note");
var eNote = document.getElementById("e-note");
var fNote = document.getElementById("f-note");
var gNote = document.getElementById("g-note");
var aNote = document.getElementById("a-note");
var bNote = document.getElementById("b-note");

$(".c-note").on("mouseenter", function() {
    cNote.currentTime = 0;
    cNote.play();
})
$(".d-note").on("mouseenter", function() {
    dNote.currentTime = 0;
    dNote.play();
})
$(".e-note").on("mouseenter", function() {
    eNote.currentTime = 0;
    eNote.play();
})
$(".f-note").on("mouseenter", function() {
    fNote.currentTime = 0;
    fNote.play();
})
$(".g-note").on("mouseenter", function() {
    gNote.currentTime = 0;
    gNote.play();
})
$(".a-note").on("mouseenter", function() {
    aNote.currentTime = 0;
    aNote.play();
})
$(".b-note").on("mouseenter", function() {
    bNote.currentTime = 0;
    bNote.play();
})


$(".c-note").on("mousedown", function() {
    eNote.currentTime = 0;
    eNote.play();
})
$(".d-note").on("mousedown", function() {
    fNote.currentTime = 0;
    fNote.play();
})
$(".e-note").on("mousedown", function() {
    gNote.currentTime = 0;
    gNote.play();
})
$(".f-note").on("mousedown", function() {
    aNote.currentTime = 0;
    aNote.play();
})
$(".g-note").on("mousedown", function() {
    bNote.currentTimmousedowne = 0;
    bNote.play();
})
$(".a-note").on("mousedown", function() {
    cNote.currentTime = 0;
    cNote.play();
})
$(".b-note").on("mousedown", function() {
    dNote.currentTime = 0;
    dNote.play();
})