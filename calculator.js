btn = document.querySelectorAll('button');

btn.forEach(element => {
    console.log(element.innerText);
    if (element.innerText === '/' || 
        element.innerText === 'X' || 
        element.innerText === '-' || 
        element.innerText === '+' || 
        element.innerText === '=')
    {
        element.classList.add("special");
    }else if(element.innerText === "AC" 
            ||element.innerText==="+/-"
            ||element.innerText==="%"){

                element.classList.add("grey");
    }else{
        element.classList.add("normal");
    }
});

btn.forEach(element => {

element.classList.add(element.innerText);

})