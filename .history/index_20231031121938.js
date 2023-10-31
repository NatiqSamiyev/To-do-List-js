let form = document.querySelector("form");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector(".text-input");
let removeBtns

form.addEventListener("submit", sumbitForm);
function sumbitForm(e) {
  e.preventDefault();
  ul.style.display = "block";
  ul.innerHTML += `
  <li>
  <h3>Купить зубную пасту</h3>
  <button class="remove-btn">
    <img src="./image/Group 56.svg" alt="" />
  </button>
</li>
`;

  form.reset();

 removeBtns =document.querySelector('.remove-btn')
}

removeBtns.addEventListener('click',removeList)
function removeList(params) {
    
}