function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* MENU FILTER */
function filterMenu(value) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value.toLowerCase())
      ? "block"
      : "none";
  });
}

/* CHECKOUT */
function openCheckout() {
  document.getElementById("checkout").style.display = "flex";
}

function closeCheckout() {
  document.getElementById("checkout").style.display = "none";
}

function pay() {
  alert("Payment successful (frontend demo)");
}

/* SIMPLE AI CHATBOT (RULE-BASED MOCK) */
document.getElementById("chatInput").addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    let msg = e.target.value.toLowerCase();
    let reply = "";

    if(msg.includes("menu")) reply = "We serve burgers, pizza, seafood, and salads.";
    else if(msg.includes("time")) reply = "We are open 9AM - 12AM.";
    else if(msg.includes("book")) reply = "You can reserve a table in the reservation section.";
    else reply = "Ask me about menu, booking, or hours.";

    document.getElementById("chatBody").innerHTML += `<p>${reply}</p>`;
    e.target.value = "";
  }
});
