let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "yukina-chibi") {
            event.target.setAttribute("src", "assets/images/yukina-2.png");
            return;
        } else if (event.target.id === "sayo-chibi") {
            event.target.setAttribute("src", "assets/images/sayo-2.png");
            return;
        } else if (event.target.id === "ako-chibi") {
            event.target.setAttribute("src", "assets/images/ako-2.png");
            return;
        } else if (event.target.id === "rinko-chibi") {
            event.target.setAttribute("src", "assets/images/rinko-2.png");
            return;
        } else if (event.target.id === "lisa-chibi") {
            event.target.setAttribute("src", "assets/images/lisa-2.png");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "yukina-chibi") {
            event.target.setAttribute("src", "assets/images/yukina-1.png");
            return;
        }
        if (event.target.id === "sayo-chibi") {
            event.target.setAttribute("src", "assets/images/sayo-1.png");
            return;
        }
        if (event.target.id === "ako-chibi") {
            event.target.setAttribute("src", "assets/images/ako-1.png");
            return;
        }
        if (event.target.id === "rinko-chibi") {
            event.target.setAttribute("src", "assets/images/rinko-1.png");
            return;
        }
        if (event.target.id === "lisa-chibi") {
            event.target.setAttribute("src", "assets/images/lisa-1.png");
            return;
        }
    });
}