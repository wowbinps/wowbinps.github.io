(function() {
  var allTags, currentLang, langSwithcer, switchLang;

  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "ru");
  }

  currentLang = localStorage.getItem("language");

  allTags = document.querySelectorAll("*");

  langSwithcer = document.querySelector("#switchLang");

  langSwithcer.addEventListener("click", function() {
    switch (currentLang) {
      case "ru":
        localStorage.setItem("language", "eng");
        break;
      case "eng":
        localStorage.setItem("language", "ru");
    }
    currentLang = localStorage.getItem("language");
    return switchLang();
  });

  switchLang = function() {
    var i, j, k, len, len1, tag;
    i = 0;
    switch (currentLang) {
      case "ru":
        for (j = 0, len = allTags.length; j < len; j++) {
          tag = allTags[j];
          if (tag.dataset.ru !== void 0) {
            tag.innerHTML = tag.dataset.ru;
          }
        }
        break;
      case "eng":
        for (k = 0, len1 = allTags.length; k < len1; k++) {
          tag = allTags[k];
          if (tag.dataset.eng !== void 0) {
            tag.innerHTML = tag.dataset.eng;
          }
        }
    }
    return localStorage.setItem("language", currentLang);
  };

  switchLang();

}).call(this);
