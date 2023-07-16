export default function scroll(albumID, prevID, nextID) {
    let scrollAlbum = document.getElementById(albumID);
    let prev = document.getElementById(prevID);
    let next = document.getElementById(nextID);

    scrollAlbum.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollAlbum.scrollLeft += evt.deltaY;
        scrollAlbum.style.scrollBehavior = "auto";
    });

    prev.addEventListener("click", () => {
        scrollAlbum.style.scrollBehavior = "smooth";
        scrollAlbum.scrollLeft -= 600;
    });

    next.addEventListener("click", () => {
        scrollAlbum.style.scrollBehavior = "smooth";
        scrollAlbum.scrollLeft += 600;
    });
}