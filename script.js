document.getElementById('calcular').addEventListener('click', function(){
    const valor = document.getElementById('valor').value;
    const taxa = (document.getElementById('taxa').value) / 100;
    const tempo = document.getElementById('tempo').value;

    const composto = parseFloat(valor) * (1 + taxa)**tempo;

    document.getElementById('total2').innerHTML = ("R$ " + composto.toFixed(2).replace('.', ','));

    const simples = parseFloat(valor) + (parseFloat(valor) * taxa)*tempo;

    document.getElementById('total1').innerHTML = ("R$ " + simples.toFixed(2).replace('.', ','));
});

texto.addEventListener('keypress', function (e) {
    if (e.key == 'Enter' && texto.value != '') {
        setItemDB()
    }
})