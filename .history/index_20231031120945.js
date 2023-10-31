let form=document.querySelector('form')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')
let input=document.querySelector('.text-input')


form.addEventListener('submit', sumbitForm)
function sumbitForm(e) {
    e.preventDefault()

    ul.innerHTML +=`
    <li>
    <h3>${input.value}</h3>
    <button>
      <img src="./image/Group 56.svg" alt="" />
    </button>
  </li>
`;
form.reset();
    
}