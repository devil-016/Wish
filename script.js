// Make sure DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

  window.checkPassword = function () {
    let pass = document.getElementById("password").value;

    if (pass === "love123") {
      showScreen(2);
    } else {
      alert("Wrong password 😢");
    }
  };

  window.cutCake = function () {
    const cake = document.querySelector(".cake");

    if (!cake.classList.contains("cut")) {
      cake.classList.add("cut");
      document.getElementById("cakeText").innerText = "Cake Cut! 🎉💖";
    }
  };

  window.nextScreen = function () {
    showScreen(3);
  };

  function showScreen(num) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("screen" + num).classList.add("active");
  }

});