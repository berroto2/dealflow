const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/casa1.jpeg") {
    myImage.setAttribute("src", "imagens/casa2.jpeg");
  } else {
    myImage.setAttribute("src", "imagens/casa1.jpeg");
  }
};
