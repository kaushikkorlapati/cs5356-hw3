document.getElementById('fetchQuote').addEventListener('click', async () => {
    const response = await fetch('https://anapioficeandfire.com/api/characters/581');
    const data = await response.json();
    document.getElementById('quoteText').innerText = `Character: ${data.name}\nCulture: ${data.culture}`;
    document.getElementById('quoteDialog').showModal();
});

document.getElementById('closeDialog').addEventListener('click', () => {
    document.getElementById('quoteDialog').close();
});
