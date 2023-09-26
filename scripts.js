// Load Advices
const loadAdvices = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displayAdvices(data));
}

// Display Advices
const displayAdvices = advices => {
    const advice = document.getElementById('advice');
    advice.innerHTML = `
        <p><strong>ID#</strong> ${advices.slip.id}</p>
        <h3>${advices.slip.advice}</h3>
        <button onclick="loadAdvices()">⟳</button>
    `;
}


// Render Advices
loadAdvices();