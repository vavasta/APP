document.getElementById('add').addEventListener('click', addNewItem);
// При нажатии на иконку Добавления Текса попадаем на второе окно;
function addNewItem(e){
    document.querySelector('.additemhidden').style.display = 'block';
    e.preventDefault();
}
document.querySelector('.plus').addEventListener('click', plusItem);
// При нажатии на + во втором окне, попадаем на третье окно;
function plusItem(e){
document.querySelector('.addnewitem').style.display = 'block';
document.querySelector('.additemhidden').style.display = 'none';
e.preventDefault();
}

document.querySelector('.cancel').addEventListener('click', cancelAdding);
// При нажатии на CANCEL в третьем окне, она возвращает на второе окно;
function cancelAdding(e){
    document.querySelector('.addnewitem').style.display = 'none';
    document.querySelector('.additemhidden').style.display = 'block';
    e.preventDefault();
}

document.getElementById('addtext').addEventListener('click', addNewText);
// Во втором окне при нажатии на ADD если значение существует то запускает функцию AddNewTextItem, если нет то -;
function addNewText(e){
    e.preventDefault();
    let input = document.querySelector('.textnewitem');
    if(input.value != ''){
      AddNewTextItem(input.value);
    }else{
      input = '';
    }
  }
let ul = '';
let counter = [];
// Добавляет элемент на страницу и пушит в массив COUNTER;
function AddNewTextItem(text){
    let ul = document.querySelector('.ulplus');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">X</span><label>${text}</label>`;
    ul.appendChild(li);
    counter.push(text);


document.querySelector('.addnewitem').style.display = 'none';
document.querySelector('.additemhidden').style.display = 'block';

// Удаление элемента со страници и с массива(НЕ РАБОТАЕТ);
document.querySelector('.ulplus').addEventListener('click', DeleteText);
function DeleteText(e){
if(e.target.className == 'delete'){
  let removetodoitem = e.target.parentNode;
  let parentNode = removetodoitem.parentNode;
  if(parentNode){
    parentNode.removeChild(removetodoitem); 
  } 
  removetodoitemtext = removetodoitem.lastChild.innerText;
  counter = counter.filter(removetodoitem => removetodoitem !== removetodoitemtext)
  //1.) DOM IPI достать text который лежит в removetodoitem ; 2.) сохранить в переменную removetodoitemtext; 3.)Отфильтровать массив  counter 4.) counter = counter.filter(item => item !== removetodoitemText)
  }
  }
} 

document.querySelector('.additem').addEventListener('click', addItemToList);
// Дообавление элементов находящихся в массиве на главную страницу(начальную);
function addItemToList(text){
    text.preventDefault();
    let ullist = document.querySelector('.uladditem');
    if(counter.length > 0){
    counter.forEach(function(text){
    let lilist = document.createElement('li');
    texttext = lilist.innerHTML = `<li class="dom" ><span class= "domspan"><img src="img/home_icon_46px@1X.png" alt=""></span><span class = "checkboxspan"><input type="checkbox" id= "checkbox"><h6>Move to Cart</h6></span><label>${text}</label></li>`;
    ullist.appendChild(lilist);
    counter = [];
    document.querySelector('.ulplus').innerHTML = '';
    document.querySelector('.listdiv').style.display = 'block';
    document.querySelector('.additemhidden').style.display = 'none';
    })
  }else{
    document.querySelector('.listdiv').style.display = 'block';
    document.querySelector('.additemhidden').style.display = 'none';
  }
  }

  //Типа рефреша, но пока не придумал для чего он;
// document.getElementById('refresh').addEventListener('click', refresh);

// function refresh(e){

// }

//Удаление элемента из массива COUNTER и добавление в массив корзины CARTCOUNTER;
let cartcounter = [];
document.querySelector('.uladditem').addEventListener('click', MovetoCart);
function MovetoCart(e){
if(e.target.id == 'checkbox'){
  let removeitemfromdomtocart = e.target.parentNode.parentNode;
  let parentNode = removeitemfromdomtocart.parentNode;
  if(parentNode){
  parentNode.removeChild(removeitemfromdomtocart); 
  } 
  removeitemfromdomtocarttext = removeitemfromdomtocart.lastChild.innerText;
  if(counter >= 0){
  cartcounter.push(removeitemfromdomtocarttext);
  counter = counter.filter(removeitemfromdomtocart => removeitemfromdomtocart !== removeitemfromdomtocarttext)
  let ulcart = document.querySelector('.ulcartadditem');
  let licart = document.createElement('li');
  textcart = licart.innerHTML = `<li class="cart" ><span class= "cartspan"><img src="img/cart_icon_50px@1X.png" alt=""></span><span class = "checkboxcart"><input type="checkbox" id= "checkboxcart"><h6>Move to List</h6></span><label>${removeitemfromdomtocarttext}</label></li>`;
  ulcart.appendChild(licart);
  console.log(cartcounter)
  }
}
}
//Корзина
document.getElementById('cartimg').addEventListener('click', cart);

function cart(e){
  
  document.querySelector('.addnewitem').style.display = 'none';
document.querySelector('.carthidden').style.display = 'block';
e.preventDefault();
}

document.getElementById('cartback').addEventListener('click', StayCart);

//Просто удержание на корзине
function StayCart(e){
  e.preventDefault();
  document.querySelector('.carthidden').style.display = 'block';
}

//Возврат на дом
document.getElementById('domback').addEventListener('click', ReturntoDom);

function ReturntoDom(e){
  e.preventDefault();
  document.querySelector('.listdiv').style.display = 'block';
  document.querySelector('.carthidden').style.display = 'none';
}

//Просто удержание на доме

document.getElementById('domimg').addEventListener('click', StayDom);

function StayDom(e){
  e.preventDefault();
  document.querySelector('.listdiv').style.display = 'block';
}

//Удаление из корзины и пушим в COUNTER
document.querySelector('.ulcartadditem').addEventListener('click', MoveBacktoDom);
function MoveBacktoDom(e){
if(e.target.id == 'checkboxcart'){
  let removeitemfromcarttodom = e.target.parentNode.parentNode.parentNode;
  let parentNode = removeitemfromcarttodom.parentNode;
  if(parentNode){
  parentNode.removeChild(removeitemfromcarttodom); 
  } 
  removeitemfromcarttodomtext = removeitemfromcarttodom.lastChild.innerText;
  counter.push(removeitemfromcarttodomtext);
  cartcounter = cartcounter.filter(removeitemfromcarttodom => removeitemfromcarttodom !== removeitemfromcarttodomtext)
  let uldom = document.querySelector('.uladditem');
  let lidom = document.createElement('li');
  textdom = lidom.innerHTML = `<li class="dom" ><span class= "domspan"><img src="img/home_icon_46px@1X.png" alt=""></span><span class = "checkboxspan"><input type="checkbox" id= "checkbox"><h6>Move to Cart</h6></span><label>${removeitemfromcarttodomtext}</label></li>`;
  uldom.appendChild(lidom);
  console.log(cartcounter)
  if(cartcounter = 0){
  cartcounter = [];
  document.querySelector('.ulcartadditem').innerHTML = '';}
  }

}