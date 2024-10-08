document
  .getElementById("donate-btn-1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addDonet = getInputById("forNoakhali");
    if (!isNaN(addDonet) && addDonet > 0) {
      const donateAmount = getInputTextById("already-donate");
      const totalDonateForNoakhali = addDonet + donateAmount;
      document.getElementById("already-donate").innerText =
        totalDonateForNoakhali;
      const forBdBalance = getInputTextById("bd-balance");
      const total = forBdBalance - addDonet;
      document.getElementById("bd-balance").innerText = total;
      const div = document.createElement("div");

      div.innerHTML = ` <p>${addDonet} Donate for Flood at Noakhali,Bangladesh.</p>
     `;

      document.getElementById("noakhali-donate").appendChild(div);
      const currentTime = getCurrentTime();
      document.getElementById(
        "realTime1"
      ).textContent = `last donate details:${currentTime}`;
    } else {
      alert("please enter amount!");
    }
  });

document
  .getElementById("donate-btn-2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addDonet = getInputById("forFeni");
    if (!isNaN(addDonet) && addDonet > 0) {
      const donateAmount = getInputTextById("forFeniAlredy");
      const totalDonateForNoakhali = addDonet + donateAmount;
      document.getElementById("forFeniAlredy").innerText =
        totalDonateForNoakhali;
      const forBdBalance = getInputTextById("bd-balance");
      const total = forBdBalance - addDonet;
      document.getElementById("bd-balance").innerText = total;
      const div = document.createElement("div");

      div.innerHTML = ` <p>${addDonet} Donate for Flood at Feni,Bangladesh.</p>
     `;

      document.getElementById("forDonateFeniadd").appendChild(div);
      const currentTime = getCurrentTime();
      document.getElementById(
        "realTime2"
      ).textContent = `last donate details:${currentTime}`;
    } else {
      alert("please enter amount!");
    }
  });

document
  .getElementById("donate-btn-3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addDonet = getInputById("forQouta");
    if (!isNaN(addDonet) && addDonet > 0) {
      const donateAmount = getInputTextById("already-qouta");
      const totalDonateForNoakhali = addDonet + donateAmount;
      document.getElementById("already-qouta").innerText =
        totalDonateForNoakhali;
      const forBdBalance = getInputTextById("bd-balance");
      const total = forBdBalance - addDonet;
      document.getElementById("bd-balance").innerText = total;
      const div = document.createElement("div");

      div.innerHTML = ` <p>${addDonet} Donate for Quota Movement,Bangladesh.</p>
     `;

      document.getElementById("forDonateQouta").appendChild(div);
      const currentTime = getCurrentTime();
      document.getElementById(
        "realTime3"
      ).textContent = `last donate details:${currentTime}`;
    } else {
      alert("please enter amount!");
    }
  });
