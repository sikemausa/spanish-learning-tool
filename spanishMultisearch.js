const englishButton = document.querySelector('#search');
const spanishButton = document.querySelector('#search-spanish');
const iframe1 = document.querySelector('#iframe1');
const iframe2 = document.querySelector('#iframe2');
const iframe3 = document.querySelector('#iframe3');
const iframe4 = document.querySelector('#iframe4');
const englishSearch = document.querySelector('#search-word');
const spanishSearch = document.querySelector('#search-spanish-word');

setFrame1 = () => {
  iframe1.src = `https://www.wordreference.com/es/translation.asp?tranword=${englishSearch.value}`;
}

setOthers = () => {
  iframe2.src = `https://www.forvo.com/word/${spanishSearch.value}/#es`;
  iframe3.src = `https://www.google.es/search?igu=1&q=${spanishSearch.value}&tbm=isch&source=univ&sa=X&ved=2ahUKEwi7nsTw9pXlAhUGZKwKHTx9AuUQsAR6BAgEEAE&cshid=1570856121222324`;
  iframe4.src = `https://www.google.es/search?igu=1&ei=&q=${spanishSearch.value} definicion`;
}


englishSearch.addEventListener('keydown', (event) => {
  submitInput(event, 'english');
});

spanishSearch.addEventListener('keydown', (event) => {
  submitInput(event, 'spanish');
});

submitInput = (event, language) => {
  if (event.keyCode === 13 && language === 'english') {
    setFrame1();
    englishSearch.value = '';
    spanishSearch.focus();
  };
  if (event.keyCode === 13 && language === 'spanish') {
    setOthers();
    spanishSearch.value = '';
    englishSearch.focus();
  };
}

englishButton.addEventListener('click', () => {
  setFrame1();
});

spanishButton.addEventListener('click', () => {
  setOthers();
});
