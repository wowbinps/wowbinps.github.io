---
---

if !localStorage.getItem "language"
	localStorage.setItem "language","ru"
currentLang = localStorage.getItem "language"

allTags = document.querySelectorAll "*"

langSwithcer = document.querySelector "#switchLang"
langSwithcer.addEventListener "click", ->
	if currentLang == "ru"
		localStorage.setItem "language","eng"
	else if currentLang == "eng"
		localStorage.setItem "language","ru"
	currentLang = localStorage.getItem "language"
	switchLang()

switchLang = ->
	i = 0
	if currentLang == "ru"
		while i < allTags.length
			el = allTags[i]
			if el.dataset.ru != undefined
				el.innerHTML = el.dataset.ru
			i++
	else if currentLang == "eng"
		while i < allTags.length
			el = allTags[i]
			if el.dataset.eng != undefined
				el.innerHTML = el.dataset.eng
			i++
	localStorage.setItem "language",currentLang
switchLang()