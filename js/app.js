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
    });
  }
}
