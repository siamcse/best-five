let totalPlayerCost;
document.getElementById('player-cost-btn').addEventListener('click',function(){
    const perPlayerCostField = document.getElementById('player-cost');
    const perPlayerCost = parseFloat(perPlayerCostField.value);
    //total player cost
    const playerExpenses = document.getElementById('total-player-cost');
    totalPlayerCost = perPlayerCost * playerList.length;
    playerExpenses.innerText = totalPlayerCost;
})

document.getElementById('total-cost-btn').addEventListener('click', function(){
    // manager cost 
    const managerCostField = document.getElementById('manager-cost');
    const managerCost = parseFloat(managerCostField.value);
    //coach cost 
    const coachCostField = document.getElementById('coach-cost');
    const coachCost = parseFloat(coachCostField.value);

    const totalExpense = totalPlayerCost + managerCost + coachCost;
    document.getElementById('total-cost').innerText = totalExpense;
})