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
const topMenuEl = document.querySelector("#top-menu");
//2
topMenuEl.style.height = "100%";
//3
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
//4
topMenuEl.classList.add("flex-around");

//Part 3
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
menuLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.text = link.text;
    a.subLinks = link.subLinks;
    topMenuEl.appendChild(a)//append child adds html elements
})

//Lab Part 2

//1
const subMenuEl = document.querySelector("#sub-menu");
//2
subMenuEl.style.height = "100%";
//3
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"; 
//4
subMenuEl.classList.add("flex-around");

//1
subMenuEl.style.position = "absolute";
//2 
subMenuEl.style.top = "0";

//Part 4

//1
const topMenuLinks = document.querySelectorAll("#top-menu a");
//2
topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
  
    if(e.target.localName !== "a") return;
    console.log(e.target);
    
   if(e.target.text === "about") {
    mainEl.innerHTML =`<h1>${e.target.text.toUpperCase()}</h1>`
    return;
  }

    if(!e.target.classList.contains("active")){
      for(let link of topMenuLinks){
          if(link !== e.target) link.classList.remove("active")
          }
      e.target.classList = "active"  
      subMenuEl.style.top = "100%";
      buildSubmenu(e.target.subLinks);
      console.log("added active")
         
    } else {
        e.target.classList.remove('active') 
        subMenuEl.style.top = "0%";
        console.log("removed active")
        
    }
   //let x = e.target.text
    //let x = e.target.subLinks;
    //console.log(x);

    



})

//Part 5

function buildSubmenu (subMenu) {

subMenuEl.innerHTML = ""

subMenu.forEach((link) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.text = link.text;
  subMenuEl.appendChild(a)//append child adds html elements
})


}


subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if(e.target.localName !== "a") return;
  console.log(e.target,'sub');

  //e.target.parentElement.classList.remove('active') 
    subMenuEl.style.top = "0%";
    console.log("removed active")

    for(let link of topMenuLinks){
       link.classList.remove("active")
      }
      mainEl.innerHTML =`<h1>${e.target.text.toUpperCase()}</h1>`
})

