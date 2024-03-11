// #1
document.getElementById("myParagraph").innerText = "Салам, дүйнө!";


// #2
const newParagraph = document.createElement("p");
newParagraph.innerText = "Бул текст динамикалык түрдө түзүлдү";
document.body.appendChild(newParagraph);


//#4
document.querySelector("p").remove();
