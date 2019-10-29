function goldbach(odd){
    odd = document.getElementById("odd").value
    odd = parseInt(odd);
    let temp = ''
    for(var j=2;j<odd-2;j++){
      var z = odd -j;
      if(gedebahe(j)&&gedebahe(z)&&j<=z){
          temp += (odd+"可以拆分为两个质数"+ j+"与"+z+"的和"+'<br>');
      }
    }
   document.getElementById("goldbach").innerHTML = temp ;
  }
function gedebahe(gdbh){
    var sum = 0;
    for(var i = 1;i <= gdbh;i++){
        if(gdbh % i == 0){
            sum++;
        }
    }
    if(sum == 2){
        return true;
    }else{
        return false;
    }
}