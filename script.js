function sendForm() {
    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("user-email").value;
    const content = document.getElementById("content").value;
    const rozmiar = document.querySelector('input[name="rozmiar"]:checked')?.value;
    const sos = document.getElementById("sos").value;

    document.getElementById('dane').innerHTML = `
    <h1> Wysłane z formularza:</h1>
    <p><strong>Nick:</strong> ${nickname}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Rozmiar pizzy:</strong> ${rozmiar || "Nie wybrano"}</p>
    <p><strong>Sos:</strong> ${sos || "Nie wybrano"}</p>
    <p><strong>Informacja:</strong> ${content}</p>

`;

const dod = [];
for (let i = 1; i <= 6; i++) {
    dod[i] = document.getElementById(`dodatki${i}`);
}

document.getElementById('dane').innerHTML += "<h2>Dodatki:</h2>";
for (let i = 1; i <= 6; i++) {
    if (dod[i].checked) {
        document.getElementById('dane').innerHTML += `${dod[i].value},`;
    }
}

}

function changeBackground(){
    document.body.style.color = "darkblue";
    const kolorInput = document.getElementById('kolor')
    document.body.style.backgroundColor = kolorInput.value;
}

function changeBackgroundRandom(){
 const randomRed = Math.floor(Math.random() * 256);
 const randomGreen = Math.floor(Math.random() * 256);
 const randomBlue = Math.floor(Math.random() * 256);
 document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}
function changecolor(){
    const randomRed1 = Math.floor(Math.random() * 256);
 const randomGreen1 = Math.floor(Math.random() * 256);
 const randomBlue1 = Math.floor(Math.random() * 256);
     document.body.style.color = `rgb(${randomRed1}, ${randomGreen1}, ${randomBlue1})`;
    document.body.style.fontSize = `${Math.floor(Math.random() * 51) + 10}px`;
}

document.getElementById("matma").textContent = Math.floor(Math.random() * 25)+1000;