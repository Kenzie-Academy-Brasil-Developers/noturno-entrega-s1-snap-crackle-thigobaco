function snapCrackle(maxValue){
    let Msg = "";
    for ( let Valor = 1; Valor <= maxValue; Valor ++){
        if ( Valor %2 !== 0){
            Msg += "Snap, "
        }
        if (Valor % 5 === 0){
            Msg += "Crackle, "
        }
        if (Valor % 5 ===0 && Valor %2 !== 0){
            Msg += "SnapCrackle, "
        }
        if (Valor %2 === 0 && Valor % 5 !==0){
            Msg 
        }
        Msg += Valor + ", "           
    } 
        
    console.log(Msg);
}

snapCrackle(12)







