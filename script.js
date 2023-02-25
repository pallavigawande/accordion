let auritem = document.getElementsByClassName("item");
let openicon = document.getElementsByClassName("iconOpen");
let close = document.getElementsByClassName("iconClose");

for (let i = 0; i < auritem.length; i++) {
  close[i].style.display = "none";
  auritem[i].addEventListener("click", () => {
    const result = auritem[i].classList.toggle("active");
    if (result) {
      close[i].style.display = "block";
      openicon[i].style.display = "none";
    } else {
      close[i].style.display = "none";
      openicon[i].style.display = "block";
    }
  });
}
