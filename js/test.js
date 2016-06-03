var dev = document.getElementById("developer");
dev.addEventListener('mouseover', function () {
    dev.innerHTML = 'Praneet Mehta';
});
dev.addEventListener('mouseout', function () {
    dev.innerHTML = 'Developer';
});
$(document).ready(function () {
    $(".btnSlide").click(function () {
        $(".row2").slideToggle(500);
    });
});


function changeColor(c) {

    document.getElementById("header").style.background = c;
    document.getElementById("img-gallery").style.background = c;
    document.getElementById("navColor").style.background = c;
    if (c == '#0095ff') {
        var v = "url(http://s33.postimg.org/a6guq6trz/backdrop_blue.png)";
        changeBg(v);
    }
    if (c == "#333") {
        var v = "url(http://s33.postimg.org/5rau416pr/backdrop.png)";
        changeBg(v);
    }
    if (c == "#f69c55") {
        var v = "url(http://s33.postimg.org/fhrmgj7en/backdrop_orange.png)";
        changeBg(v);
    }
    if (c == '#cc0000') {
        var v = "url(http://s33.postimg.org/g0x696fr3/backdrop_red.png)";
        changeBg(v);
    }

}

function changeBg(url) {
    document.getElementById("textBody").style.backgroundImage = url;
    document.getElementById("textBody").style.backgroundRepeat = "no-repeat";
    document.getElementById("textBody").style.backgroundSize = "cover";
    document.getElementById("textBody").style.backgroundAttachment = "scroll";
}

function changeGradient(c) {
    document.getElementById("navColor").style.opacity = "0.9";
    document.getElementById("header").style.background = "#333";
    document.getElementById("navColor").style.background = "#333";
    if (c == '#6c5b7b') {
        document.getElementById("textBody").removeAttribute("background-image");
        document.getElementById("textBody").style.background = "linear-gradient(#f8b195,#f67280,#c06c84,#6c5b7b,#355c7d)";
        document.getElementById("textBody").style.backgroundAttachment = "fixed";
        document.getElementById("img-gallery").style.background = "linear-gradient(#f8b195,#f67280,#c06c84,#6c5b7b,#355c7d)";
        document.getElementById("img-gallery").style.backgroundAttachment = "fixed";
    }
    if (c == '#99b898') {
        document.getElementById("textBody").removeAttribute("background-image");
        document.getElementById("textBody").style.background = "linear-gradient(#99b898,#feceab,#ff847c,#e84a5f,#2a363b)";
        document.getElementById("textBody").style.backgroundAttachment = "fixed";
        document.getElementById("img-gallery").style.background = "linear-gradient(#99b898,#feceab,#ff847c,#e84a5f,#2a363b)";
        document.getElementById("img-gallery").style.backgroundAttachment = "fixed";
    }
    if (c == '#3eaca8') {
        document.getElementById("textBody").removeAttribute("background-image");
        document.getElementById("textBody").style.background = "linear-gradient(#e5efc1,#a2d4ab,#3eaca8,#547a82,#5a5050)";
        document.getElementById("textBody").style.backgroundAttachment = "fixed";
        document.getElementById("img-gallery").style.background = "linear-gradient(#e5efc1,#a2d4ab,#3eaca8,#547a82,#5a5050)";
        document.getElementById("img-gallery").style.backgroundAttachment = "fixed";
    }
    if (c == '#F9d423') {
        document.getElementById("textBody").removeAttribute("background-image");
        document.getElementById("textBody").style.background = "linear-gradient(#e1f5c4,#ece473,#f9d423,#f6903d,#f05053)";
        document.getElementById("textBody").style.backgroundAttachment = "fixed";
        document.getElementById("img-gallery").style.background = "linear-gradient(#e1f5c4,#ece473,#f9d423,#f6903d,#f05053)";
        document.getElementById("img-gallery").style.backgroundAttachment = "fixed";
    }
}