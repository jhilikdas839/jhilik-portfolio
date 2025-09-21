const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  console.log(e);
  
}); 



  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".part2");

  
  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
  });


  