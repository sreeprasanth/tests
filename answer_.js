var A = [];
var x ;
var size = A.length;

if (chkPair(A, size, x)==true) {
    document.write("<br/>array exists array length is equal to 2 ");
} else if(chPair(A, size, x)==true){
    document.write("<br/>array exists array length is equal to 1 ");
}else{
    document.write("<br/> no such subarray exits array length is 0");
}

function chpair(){
    for(let m = 0; m< (size-1); m++){
        if (A[m]==x){
            return true ;
        }
    
    }
    return false
}

function chkPair(A , size , x) {
    for (let i = 0; i < (size - 1); i++) {
        for (let j = (i + 1); j < size; j++) {
            if (A[i] + A[j] == x) {
                return true;
            }
        }
    }

    return false;
}
