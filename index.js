//Lab Part 1

//Part 1
//1
const mainEl = document.querySelector("main");
// //2
mainEl.style.backgroundColor = "var(--main-bg)";
//3
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//4
mainEl.classList.add("flex-ctr")

//Part 2
//1
const topMenuEl = document.querySelector("nav");
//2
topMenuEl.style.height = "100%";
//3
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
//4
topMenuEl.classList.add("flex-around");

//Part 3
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
menuLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.text = link.text;
    topMenuEl.appendChild(a)//append child adds html elements
})

//Lab Part 2

//