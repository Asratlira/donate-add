document
  .getElementById("donate-btn-1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addDonet = getInputById("forNoakhali");
    if (addDonet === NaN && addDonet < 0) {
      const donateAmount = getInputTextById("already-donate");
      const totalDonateForNoakhali = addDonet + donateAmount;
      document.getElementById("already-donate").innerText =
        totalDonateForNoakhali;
      const forBdBalance = getInputTextById("bd-balance");
      const total = forBdBalance - addDonet;
      document.getElementById("bd-balance").innerText = total;
    } else {
      alert("please enter amount!");
    }
  });

document
  .getElementById("donate-btn-2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addDonet = getInputById("forFeni");
    if (addDonet === NaN && addDonet < 0) {
      const donateAmount = getInputTextById("forFeniAlredy");
      const totalDonateForNoakhali = addDonet + donateAmount;
      document.getElementById("forFeniAlredy").innerText =
        totalDonateForNoakhali;
      const forBdBalance = getInputTextById("bd-balance");
      const total = forBdBalance - addDonet;
      document.getElementById("bd-balance").innerText = total;
    } else {
      alert("please enter amount!");
    }
  });

document
  .getElementById("donate-btn-3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addDonet = getInputById("forQouta");
    if (addDonet === NaN && addDonet < 0) {
      const donateAmount = getInputTextById("already-qouta");
      const totalDonateForNoakhali = addDonet + donateAmount;
      document.getElementById("already-qouta").innerText =
        totalDonateForNoakhali;
      const forBdBalance = getInputTextById("bd-balance");
      const total = forBdBalance - addDonet;
      document.getElementById("bd-balance").innerText = total;
    } else {
      alert("please enter amount!");
    }
  });
