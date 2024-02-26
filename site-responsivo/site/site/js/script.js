import DarkMode from "./modules/dark-mode.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initMenuLi from "./modules/menu-li.js";
import initTyping from "./modules/typing.js";
import Portfolio from "./modules/portfolio.js";
import initAnimationScroll from "./modules/animation-scroll.js";
import initScrollSuave from "./modules/scroll-suve.js";
import initFuncionamento from "./modules/funcionamento.js";

const darkmode = new DarkMode('.sec', '.toggle', '.toggle img')
darkmode.init();

const portfolio = new Portfolio('.zoom-text', '.img-container', '.img_gallery','.image-view','next-btn', 'prev-btn', 'close', '.image-box')
portfolio.init();

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Do something with the form values (e.g., send them to a server)
    console.log('Nome:', name);
    console.log('Email:', email);

    // You can add more functionality here, like sending the form data to a server using AJAX
});

initMenuLi()
initTyping()
initAnimationScroll()
initScrollSuave()
initFuncionamento()

