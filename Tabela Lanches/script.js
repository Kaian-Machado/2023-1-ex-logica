
function comprar(){
    let codigo = Number(prompt("Digite a seguir o código do seu pedido:"))
    let quantidade = Number(prompt("Digite a seguir a quantidade de itens do pedido: "))

    
    if (codigo == 1) {
        preco = 4
    }else{
       if (codigo == 2) {
           preco = 4.5        
       }else{
        if (codigo == 3) {
            preco = 5
        }else{
           if (codigo == 4) {
               preco = 2             
           } else{
            if (codigo == 5) {
                preco = 1.5
            }
           }
        }
       }
    }
    
    let total = preco * quantidade
    alert("Valor a pagar: R$" + total.toFixed(2))



}

