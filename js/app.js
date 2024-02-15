window.onload = () => {
  main();
};

function main() {
  const addToCardButtons = document.getElementsByClassName("add-btn");
  for (const addToCardBtn of addToCardButtons) {
    addToCardBtn.addEventListener("click", function (e) {
      //  update cart count
      const CartCount = getInnerText("cart-count");
      const totalCartCount = convertStringToNumber(CartCount) + 1;
      setInnerText("cart-count", totalCartCount);

      //   update product name and price on the cart
      const selectedPlaceContainer = document.getElementById(
        "selected-place-container"
      );
      const title = e.target.parentNode.firstElementChild.innerText;
      const price = e.target.parentNode.children[1].firstElementChild.innerText;

      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = title;
      const p2 = document.createElement("p");
      p2.innerText = price;

      li.appendChild(p);
      li.appendChild(p2);
      selectedPlaceContainer.appendChild(li);

     
    });
  }
}
