var keys = document.getElementsByClassName("key");

document.addEventListener("keydown", drum, false);

function drum(e) {
    var key = e.keyCode;
    if (key == "65") {
        var audio = new Audio('sounds/clap.wav');
    }
    else if (key == "83") {
        var audio = new Audio('sounds/hihat.wav');
    }
    else if (key == "68") {
        var audio = new Audio('sounds/kick.wav');
    }
    else if (key == "70") {
        var audio = new Audio('sounds/openhat.wav');
    }
    else if (key == "71") {
        var audio = new Audio('sounds/boom.wav');
    }
    else if (key == "72") {
        var audio = new Audio('sounds/ride.wav');
    }
    else if (key == "74") {
        var audio = new Audio('sounds/snare.wav');
    }
    else if (key == "75") {
        var audio = new Audio('sounds/tom.wav');
    }
    else if (key == "76") {
        var audio = new Audio('sounds/tink.wav');
    }
    else {
        return false;
    }
    for (var i = 0; i < keys.length; i++) {
        if (keys[i].getAttribute("data-key") == key) {
            var temp = keys[i];
            keys[i].classList.add("playing");
            setTimeout(function (temnp) { temp.classList.remove("playing"); }, 100);
        }
    }
    audio.play();
}

