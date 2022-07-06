(function() {
  var allTags, currentLang, langSwithcer, switchLang;

  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "ru");
  }

  currentLang = localStorage.getItem("language");

  allTags = document.querySelectorAll("*");

  langSwithcer = document.querySelector("#switchLang");

  langSwithcer.addEventListener("click", function() {
    if (currentLang === "ru") {
      localStorage.setItem("language", "eng");
    } else if (currentLang === "eng") {
      localStorage.setItem("language", "ru");
    }
    currentLang = localStorage.getItem("language");
    return switchLang();
  });

  switchLang = function() {
    var el, i;
    i = 0;
    if (currentLang === "ru") {
      while (i < allTags.length) {
        el = allTags[i];
        if (el.dataset.ru !== void 0) {
          el.innerHTML = el.dataset.ru;
        }
        i++;
      }
    } else if (currentLang === "eng") {
      while (i < allTags.length) {
        el = allTags[i];
        if (el.dataset.eng !== void 0) {
          el.innerHTML = el.dataset.eng;
        }
        i++;
      }
    }
    return localStorage.setItem("language", currentLang);
  };

  setTimeout(switchLang(), 200);

}).call(this);
