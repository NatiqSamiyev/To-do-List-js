let form=document.querySelector('form')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')
let input=document.querySelector('.text-input')


form.addEventListener('sumbit', sumbitForm)
function sumbitForm(a) {
    a.preventDefault()
    console.log('kjh');
    ul.innerHTML +=`
    <li>
     <h3>Почистить зубы</h3>
     <img src="./image/Group 56.svg" alt="">
     <p>${textInput.value}</p>
    </li>

    <li>
     <h3>Купить зубную пасту</h3>
     <img src="./image/Group 56.svg" alt="">
    </li>

    <li>
     <h3>Умыться</h3>
     <img src="./image/Group 56.svg" alt="">
    </li>

    <li>
     <h3>Выпить кофе</h3>
     <img src="./image/Group 56.svg" alt="">
    </li>

    <li>
     <h3>Принять душ</h3>
     <img src="./image/Group 56.svg" alt="">
    </li>
`;
// form.reset();
    
}