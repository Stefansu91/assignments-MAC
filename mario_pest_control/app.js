var totalCoins = document.form1

totalCoins.addEventListener("submit", function(event){
    event.preventDefault()

    var goomba = totalCoins.goomba.value * 5
    var bomb = totalCoins.bomb.value * 7
    var cheep = totalCoins.cheep.value * 11
    var subTotal = Number(goomba) + Number(bomb) + Number(cheep)

    var total = document.getElementById("total-coins")

    total.textContent = ` Total is ${subTotal} coins.`
})