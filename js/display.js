const btns = document.getElementsByClassName('select-btn');
const playerList = [];

function selectedPlayerDisplay(playerList){
    const selectedPlayer = document.getElementById('selected-player');
    selectedPlayer.innerHTML = '';

    for(let i=0;i<playerList.length;i++){
        const ol = document.createElement('ol');
        ol.innerHTML = `
        <ol class="list-outside">
            <li class="p-2">${i+1}. ${playerList[i]}</li>
        </ol>
        `;
        selectedPlayer.appendChild(ol);
    }
}

for(const btn of btns){
    btn.addEventListener('click',function(event){

        const playerName = event.target.parentNode.parentNode.children[0].innerText;
    
        if(playerList.length>4){
            console.log(playerList.length);
            alert("You can't add more than 5.");
            return;
        }
        playerList.push(playerName);
        selectedPlayerDisplay(playerList);
    })
}