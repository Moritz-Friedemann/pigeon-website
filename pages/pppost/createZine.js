const parentElement = document.getElementById("zine");
const pages = document.querySelectorAll(".page");
const firstImage = pages[0].querySelector("img");
const pageFlip = new St.PageFlip(parentElement, {
  width: Number(firstImage.getAttribute("width")),
  height: Number(firstImage.getAttribute("height")),
  showCover: true,
  size: "stretch",
  minWidth: 300,
  maxWidth: 560,
  minHeight: 500,
  maxHeight: 750,
});
pageFlip.loadFromHTML(pages);
