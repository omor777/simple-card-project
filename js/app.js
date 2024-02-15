window.onload = () => {
  main();
};

function main() {
  const addToCardButtons = document.getElementsByClassName("add-btn");
  for (const addToCardBtn of addToCardButtons) {
    addToCardBtn.addEventListener("click", function (e) {
      // disabled card button
      e.target.disabled = true;
      e.target.classList.add('bg-gray-400')
      e.target.classList.add('text-black')
      e.target.parentNode.parentNode.classList.add("bg-gray-500");

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

      //   update total budget
      const budget = convertStringToNumber(getInnerText("budget"));
      const totalBudget = budget - convertStringToNumber(price);
      if (totalBudget < 0) {
        alert("budget limit cross");
        return;
      }
      setInnerText("budget", totalBudget);
      //   console.log(totalBudget);

      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = title;
      const p2 = document.createElement("p");
      p2.innerText = price;

      li.appendChild(p);
      li.appendChild(p2);
      selectedPlaceContainer.appendChild(li);
      // update total cost
      const totalCost =
        convertStringToNumber(getInnerText("total-cost")) +
        convertStringToNumber(price);
      setInnerText("total-cost", totalCost);
      //  update grand total
      calculateGrandTotal();
    });
  }
}

function calculateGrandTotal(category) {
  let total = convertStringToNumber(getInnerText("total-cost"));
  if (category === "bus") {
    setInnerText("grand-total", total + 100);
  } else if (category === "train") {
    setInnerText("grand-total", total - 200);
  } else if (category === "flight") {
    setInnerText("grand-total", total + 500);
  } else {
    setInnerText("grand-total", total);
  }
}
