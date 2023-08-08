function stars() {

    let count = 500;
    let scene = document.querySelector(".scene");
    let i = 0;

    while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";

        star.style.animationDuration = 5 + duration + "s";
        star.style.animationDelay = duration + "s";

        scene.appendChild(star);
        i++;

    }

}

stars()

const sections = document.querySelectorAll("section");
const windowHeight = window.innerHeight;
const navigation = document.querySelector(".navigation");

function reset() {
    for (let i = 0; i < navigation.children.length; i++) {
        navigation.children[i].classList.remove("selected");

    }
}


window.addEventListener("scroll", function () {
    const scrollTop = this.window.scrollY;
    sections.forEach(function (section, i) {
        let offset = i === 0 ? windowHeight / 2.2 : windowHeight / 1.5;
        if (section.offsetTop < scrollTop + offset && scrollTop < section.offsetTop + offset) {
            reset();
            navigation.children[i].classList.add("selected");
        }
    });
});



document.querySelectorAll(".navigation li").forEach(function (item, i) {
    item.addEventListener("click", function () {
        window.scrollTo({
            top: i * windowHeight,
            behavior: "smooth"
        })
    })
})



