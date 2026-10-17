const descInput=document.getElementById('descInput');
const priceInput=document.getElementById('priceInput');
const addBtn=document.getElementById('addBtn');
const expenseList=document.getElementById('expenseList');
const totalAmount=document.getElementById('totalAmount');

const expenses=JSON.parse(localStorage.getItem('expenses')) || [];

addBtn.addEventListener('click',function(){
const description=descInput.value;
const price=parseFloat(priceInput.value);

expenses.push({
    description:description,
    price:price
});

localStorage.setItem('expenses',JSON.stringify(expenses));

descInput.value='';
priceInput.value='';
descInput.focus();

renderExpenses();
});

function renderExpenses(){
expenseList.innerHTML='';

let total=0;

for(let i=0;i<expenses.length;i++){
    const li =document.createElement('li'); 
    const textSpan=document.createElement('span');
    textSpan.textContent=`${expenses[i].description} - ${expenses[i].price} SYP`;
    const deleteBtn=document.createElement('button');
     deleteBtn.textContent='X';
     deleteBtn.classList.add('delete-btn');

     deleteBtn.addEventListener('click',function(){
        expenses.splice(i,1);
        localStorage.setItem('expense',JSON.stringify(expenses));
        renderExpenses();
     });
     li.appendChild(textSpan);
     li.appendChild(deleteBtn);
    expenseList.appendChild(li);
    total=total+expenses[i].price;
}

totalAmount.textContent=total;
}
renderExpenses();




