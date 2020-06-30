function initMenu() {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  var menuParents = document.querySelectorAll(".parent");

  if (menuParents.length) {
    window.addEventListener("click", function (e) {
      menuParents.forEach(function (item) {
        if (e.path.indexOf(item) == -1) {
          item.classList.remove("clicked");
        }
      });
    });

    menuParents.forEach(function (item) {
      item.onmouseover = function () {
        item.classList.add("hover");
      };

      item.onmouseout = function () {
        item.classList.remove("hover");
      };

      item.onclick = function (e) {
        if (item.classList.contains("clicked")) {
          item.classList.remove("clicked");
        } else {
          item.classList.add("clicked");
        }
      };
    });
  }

  var btnMenu = document.getElementById("btnMenu");
  if (btnMenu !== null) {
    document.getElementById("btnMenu").addEventListener("click", function () {
      if (this.classList.contains("open")) {
        this.classList.remove("open");
        document.querySelector(".header.m").classList.remove("open");
        document.getElementById("menuMobile").classList.remove("open");
        this.classList.remove("fa-times");
      } else {
        this.classList.add("fa-times");
        this.classList.add("open");
        document.querySelector(".header.m").classList.add("open");
        document.getElementById("menuMobile").classList.add("open");
      }
    });
  }

}

document.addEventListener('DOMContentLoaded', initMenu);