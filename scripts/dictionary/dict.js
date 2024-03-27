const searchButton = document.getElementById('search-button');
const resultDiv = document.getElementById('result');

let wordsToMatch = [];
let wordsResults = [];

fetch('/scripts/dictionary/turkishwords.txt')
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n');
    lines.forEach(line => {
      wordsToMatch.push(line);
    });
  })
  .catch(error => console.error(error));

fetch('/scripts/dictionary/turkicwords.txt')
  .then(response => response.text())
  .then(data => {
    const lines2 = data.split('\n');
    lines2.forEach(line2 => {
      wordsResults.push(line2);
    });
  })
  .catch(error => console.error(error));

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const results = wordsToMatch.filter(word => word.includes(searchTerm));
    const resultsIndex = results.map(word => wordsToMatch.indexOf(word));
    const matchedWords = resultsIndex.map(index => wordsResults[index]);
    resultDiv.innerHTML = matchedWords.length > 0 ? `In old Turkic language it is: ${matchedWords.join(', ')}` : 'Sorry, no matching found for this word.';
    resultDiv.classList.remove('hide');
});

const searchBox = document.getElementById('search');
searchBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const results = wordsToMatch.filter(word => word.includes(searchTerm));
        const resultsIndex = results.map(word => wordsToMatch.indexOf(word));
        const matchedWords = resultsIndex.map(index => wordsResults[index]);
        resultDiv.innerHTML = matchedWords.length > 0 ? `In old Turkic language it is: ${matchedWords.join(', ')}` : 'Sorry, no matching found for this word.';
        resultDiv.classList.remove('hide');
    }
});