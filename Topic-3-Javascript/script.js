let btn = document.querySelector('button');

btn.onclick = function () {
    let txt = document.getElementById("idInput").value;
    palindrome(txt);

    function palindrome(str) {  
        let cleanStr = str.replace(/[^A-Z0-9]/ig,'');
        let reverseStr = cleanStr.split('').reverse().join('');

        if(reverseStr == cleanStr){
            document.getElementById("output").value = "It\'s a palindrome";            
        }else{
            document.getElementById("output").value = "It\'s not a palindrome";
        }
    }
}