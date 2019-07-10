let btn = document.querySelector('button');

btn.onclick = function () {
    let txt = document.getElementById("idInput").value;
    wordLength = txt.length;

    if (wordLength%2 == 0){
        middle = wordLength/2;
        let half1 = txt.slice(0, middle);
        let half2 = txt.slice(middle, wordLength);
        palindrome(half1, half2);
    }else{
        middle = parseInt(wordLength/2);
        console.log(middle);
        let half1 = txt.slice(0, middle);
        let half2 = txt.slice(middle+1, wordLength);
        palindrome(half1, half2);
    }

    function palindrome(str1, str2) {        
        let reverseStr = str2.split('').reverse().join('');        
        console.log(reverseStr);  
        if(reverseStr == str1){
            document.getElementById("output").value = "It\'s a palindrome";            
        }else{
            document.getElementById("output").value = "It\'s not a palindrome";
        }
    }
}