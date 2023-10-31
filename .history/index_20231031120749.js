let form=document.querySelector('form')
let btn=document.querySelector('button')
let ul=document.querySelector('ul')
let input=document.querySelector('.text-input')


form.addEventListener('submit', sumbitForm)
function sumbitForm(e) {
    e.preventDefault()
    console.log('kjh');
    ul.innerHTML +=`
    <li>
    <h3>${</h3>
    <button>
      <img src="./image/Group 56.svg" alt="" />
    </button>
  </li>
`;
// form.reset();
    
}