

// BURGER MENU

const menuBtn = document.querySelector('.toggle');
const menu = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

Array.from(navLink);


navLink.forEach(function(el){
		el.addEventListener('click', function(){
			menuBtn.classList.toggle('active');
			menu.classList.toggle('active');
		})
	});

// MODAL WINDOW

const cuponModal = document.querySelector('#cuponModal');
const cuponInfo = document.querySelector('.cupon-info');
let cuponNumber='';
const cupon = document.querySelector('.cupon');
const cuponCloseBtn = document.querySelector('.cupon-closeBtn');
const cuponButton = document.querySelector('.cupon-button');

cuponModal.addEventListener('click',toggleModalVisible);
cuponCloseBtn.addEventListener('click',toggleModalVisible);
cuponButton.addEventListener('click',toggleModalVisible);


function toggleModalVisible() {
	cupon.classList.toggle('hide');
	document.body.classList.toggle('overflowYhidden');
}


window.onclick = function(event) {
	if (event.target == cupon) {
		cupon.classList.toggle('hide');
		document.body.classList.toggle('overflowYhidden');
	}
} 


for(i=0;i<8;i++){
	cuponNumber += Math.round(Math.random()*10);
}
cuponInfo.innerText = cuponNumber;


// ******************************************

// CHANGE BACKGROUND

const selectBtn = document.querySelector('.select-button');
const headerContainer = document.querySelector('.header-container');
const aboutContainer = document.querySelector('.about-container');
const aboutSubtitle = document.querySelector('.about-subtitle');
const menuContainer = document.querySelector('.menu-container');
const menuInfo = document.querySelector('.menu-info');
const dotted = document.querySelectorAll('.dotted');

const extramenuContainer = document.querySelector('.extramenu-container');
const extramenuBunner = document.querySelector('.extramenu-bunner');
const extramenuList = document.querySelector('.extramenu-list');
const reservationСontainer = document.querySelector('.reservation-container');
const reservationForm = document.querySelector('.reservation-form');
const reservationContent = document.querySelector('.reservation-content');
const reservationTitle = document.querySelector('.reservation-title');
const formInp = document.querySelectorAll('.form-inp');
const submitBtn = document.querySelector('.submit-btn');
const checkOutContent = document.querySelector('.checkOut-content');
const checkOutCard = document.querySelectorAll('.checkOut-card');
const checkOutIcon = document.querySelectorAll('.checkOut-icon');
const accordionText = document.querySelectorAll('.accordion-text');
const checkItem = document.querySelectorAll('.check-item');
const itemDiscountText = document.querySelector('.item-discountText');
const bill = document.querySelector('.bill');
const totalItem = document.querySelector('.total-item');
const discountInfo = document.querySelector('.discount-info');
const discount = document.querySelector('.discount');
const button = document.querySelectorAll('.button');
const brandColor = document.querySelectorAll('.brand-color');
const logoImg = document.querySelectorAll('.logo-img');
const locationInput = document.querySelector('.location-input');
const toggleLine = document.querySelectorAll('.toggle-line');

selectBtn.addEventListener('click', toggleTimeMode);

const currentTime = new Date().toLocaleTimeString()
const nightVueTime1 = new Date('Fri Mar 23 2023 19:00:00').toLocaleTimeString();
const nightVueTime2 = new Date('Fri Mar 23 2023 06:00:00').toLocaleTimeString()  

if(  currentTime > nightVueTime1 || currentTime < nightVueTime2 ){
	toggleTimeMode()
}


function toggleTimeMode(){
	selectBtn.classList.toggle('day-icon');
	selectBtn.classList.toggle('night-icon');
	headerContainer.classList.toggle('bg-day');
	headerContainer.classList.toggle('bg-night');
	aboutContainer.classList.toggle('bg-day');
	aboutContainer.classList.toggle('bg-night');
	aboutSubtitle.classList.toggle('color-brawn');
	aboutSubtitle.classList.toggle('color-orange');
	locationInput.classList.toggle('location-inputDay');
	locationInput.classList.toggle('location-inputNight');
	menuContainer.classList.toggle('bg-day');
	menuContainer.classList.toggle('bg-night');
	menuInfo.classList.toggle('color-brawn');
	menuInfo.classList.toggle('color-pink');
	extramenuContainer.classList.toggle('extramenu-bgDay');
	extramenuContainer.classList.toggle('extramenu-bgNight');
	extramenuBunner.classList.toggle('color-brawn');
	extramenuBunner.classList.toggle('color-white');
	extramenuList.classList.toggle('color-brawn');
	extramenuList.classList.toggle('color-pink');
	reservationСontainer.classList.toggle('reservation-bgDay');
	reservationСontainer.classList.toggle('reservation-bgNight');
	reservationContent.classList.toggle('color-black');
	reservationContent.classList.toggle('color-white');
	reservationTitle.classList.toggle('color-orangeDay');
	reservationTitle.classList.toggle('color-grey');
	reservationForm.classList.toggle('card-day');
	reservationForm.classList.toggle('card-night');
	submitBtn.classList.toggle('color-black');
	submitBtn.classList.toggle('color-white');
	checkOutContent.classList.toggle('bg-night');
	checkOutContent.classList.toggle('color-black');
	checkOutContent.classList.toggle('color-white');
	itemDiscountText.classList.toggle('item-discountDay');
	itemDiscountText.classList.toggle('item-discountNight');
	bill.classList.toggle('bill-day');
	bill.classList.toggle('bill-night');
	totalItem.classList.toggle('total-itemDay');
	totalItem.classList.toggle('total-itemNight');
	discountInfo.classList.toggle('discount-infoDay');
	discount.classList.toggle('discount-infoDay');
	discount.classList.toggle('color-white');

	
	discount

	Array.from(dotted);
	Array.from(formInp);
	Array.from(checkOutIcon);
	Array.from(button);
	Array.from(checkOutCard);
	Array.from(accordionText);
	Array.from(checkItem);
	Array.from(brandColor);
	Array.from(logoImg);
	Array.from(toggleLine);


	toggleLine.forEach(function(el){
		el.classList.toggle('toggle-lineDay');
		el.classList.toggle('toggle-lineNight');
	});

	dotted.forEach(function(el){
		el.classList.toggle('dotted-day');
		el.classList.toggle('dotted-night');
	});

	formInp.forEach(function(el){
		el.classList.toggle('border-day');
		el.classList.toggle('border-night');
	});

	checkOutIcon.forEach(function(el){
		el.classList.toggle('bg-iconDay');
		el.classList.toggle('bg-iconNight');
	});

	button.forEach(function(el){
		el.classList.toggle('button-bgDay');
		el.classList.toggle('button-bgNight');
	});

	checkOutCard.forEach(function(el){
		el.classList.toggle('checkOut-day');
		el.classList.toggle('checkOut-night');
	});

	accordionText.forEach(function(el){
		el.classList.toggle('accordion-textDay');
		el.classList.toggle('accordion-textNight');
	});

	checkItem.forEach(function(el){
		el.classList.toggle('check-itemDay');
		el.classList.toggle('check-itemNight');
	});

	brandColor.forEach(function(el){
		el.classList.toggle('brand-colorDay');
		el.classList.toggle('brand-colorNight');
	});

	logoImg.forEach(function(el){
		el.classList.toggle('logo-imgDay');
		el.classList.toggle('logo-imgNight');
	});
}


// VALIDATION FORM

const form = document.querySelector('.reservation-form');
const formInputs = document.querySelectorAll('.form-inp');
const inputEmail = document.querySelector('#email');
const inputNumber = document.querySelector('#number');
const inputDate = document.querySelector('#date');

submitBtn.addEventListener('click', getValidateForm);


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateNumber(number) {
    let re = /^[0-9\s]*$/;
    return re.test(String(number));
}

 function getValidateForm(e) {
    let emailVal = inputEmail.value,
        numberVal = inputNumber.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
			e.preventDefault();
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        alert('inputs not filled');
		e.preventDefault();
        return false;
    }

    if(!validateEmail(emailVal)) {
       alert('email not valid');
	   	e.preventDefault();
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!validateNumber(numberVal)) {
        alert('number not valid');
		e.preventDefault();
        inputNumber.classList.add('error');
        return false;
    } else {
        inputNumber.classList.remove('error');
    }
}

// ACCORDION
const accordionItem = document.querySelectorAll('.accordion-item');

		accordionItem.forEach(function(el){
			el.addEventListener('click',showAccordionItemText);
		});

		function showAccordionItemText(){
			this.nextElementSibling.classList.toggle('hide');
		} 
        // **************************************


// CHECK-OUT


const addBillBtn = document.querySelector('#addBillBtn');
const supplement = document.querySelectorAll('.supplement');
const addDiscountbtn = document.querySelector('#addDiscountBtn');
const pizzaSelect = document.querySelector('.pizza-select');
const sizeSelect = document.querySelector('.size-select');
const cauntBtnSub = document.querySelector('.caunt-btnSub');
const cauntBtnAdd = document.querySelector('.caunt-btnAdd');
const cauntField = document.querySelector('.caunt-field');


const itemResult = document.querySelector('.item-result');
const itemCost = document.querySelector('.item-cost');


let number = 1;
let discountIndex = 1;

cauntBtnAdd.addEventListener('click', addNumber);
cauntBtnSub.addEventListener('click', subNumber); 
addDiscountbtn.addEventListener('click',addDiscount);


function addNumber() {
	++number;
	cauntField.innerText = number;
	createPizzaBill();
}

function subNumber() {
	if(number == 1) {
		number = 1;
	} else {
		--number;
	}
	cauntField.innerText = number;
	createPizzaBill();
}



function addDiscount(){
		if(discount.value == cuponNumber){
			discountIndex = 0.7;
		}
		createPizzaBill();
		createBill();
}

Array.from(supplement);

const arrPrice = [[6.35, 8.5, 10.85, 13.9, "Meat Pizza"],
				  [3.9, 6, 8.35, 11.4, "Margarita Pizza"],
				  [4, 6.25, 9.05, 11.5, "Hawaiian Pizza"],
				  [4.15, 5.8, 7.5, 10, "Pepperoni Pizza"],
				  [4.05, 6.55, 8.4, 11.75, "Veggie Pizza"],
				  [1, 1.6, 2.15, 3.5, "User's Pizza"]];


addBillBtn.addEventListener('click', createOrder);
pizzaSelect.addEventListener('change', createPizzaBill);
sizeSelect.addEventListener('change', createPizzaBill);

supplement.forEach(function(el){
	el.addEventListener('change', createPizzaBill);
});

let pizzaResult = 0;
let pizzaBill = 0;
let pizzaTitle;
let pizzaSubTitle = " ";
let itemTotal = 0;
let itemTotalResult = 0;


function createPizzaBill() {
	// console.log(pizzaSelect.value)
	pizzaResult = + arrPrice[(pizzaSelect.value - 1)][sizeSelect.value];

	supplement.forEach(function(el){
		if(el.checked) {
			pizzaResult += +el.value;
		}
	});
	pizzaResult = (number * pizzaResult).toFixed(2);
	pizzaBill = (pizzaResult * discountIndex).toFixed(2);
	itemResult.innerText = `$ ${pizzaResult}`;
	itemCost.innerText = `$ ${pizzaBill}`;

}

createPizzaBill();

function createOrder() {


	let pizzaSubTitle = " ";
	
	switch (sizeSelect.value) {
		case "0":
			pizzaTitle = `${arrPrice[(pizzaSelect.value - 1)][4]} ` + '24 sm'; 
			break;
		case "1":
			pizzaTitle = `${arrPrice[(pizzaSelect.value - 1)][4]} ` + '30 sm';
			break;
		case "2":
			pizzaTitle = `${arrPrice[(pizzaSelect.value - 1)][4]} ` + '35 sm';
			break;
		case "3":
			pizzaTitle = `${arrPrice[(pizzaSelect.value - 1)][4]} ` + '45 sm';
			break;
		
	};

	supplement.forEach(function(el){
		if(el.checked && el.value == "0.85") {
			pizzaSubTitle = pizzaSubTitle + " *Chees";
		};
		if(el.checked && el.value == "0.6") {
			pizzaSubTitle = pizzaSubTitle + " *Champignon";
		};
		if(el.checked && el.value == "0.5") {
			pizzaSubTitle = pizzaSubTitle + " *Pepper";
		};
		if(el.checked && el.value == "0.55") {
			pizzaSubTitle = pizzaSubTitle + " *Olives";
		};
		if(el.checked && el.value == "0.7") {
			pizzaSubTitle = pizzaSubTitle + " *Chicken";
		};
		if(el.checked && el.value == "0.9") {
			pizzaSubTitle = pizzaSubTitle + " *Hunting sausages";
		};

		
	});

	const detailsInfo = document.querySelector('.details-info');

	const billItem = document.createElement('div');
		billItem.classList.add('bill-item');

	const billItemText = document.createElement('div');
		billItemText.classList.add('bill-itemText');

	const itemTitle = document.createElement('div');
		itemTitle.classList.add('item-title');
		itemTitle.innerText = pizzaTitle;

	const itemSubTitle = document.createElement('div');
		itemSubTitle.classList.add('item-subtitle');
		itemSubTitle.innerText = pizzaSubTitle;
	
	const billItemNumber = document.createElement('div');
		billItemNumber.classList.add('bill-itemNumber');
		billItemNumber.innerText = `x ${number}`;

	
	const billItemCost = document.createElement('div');
		billItemCost.classList.add('bill-itemCost');
		billItemCost.innerText = pizzaResult;

	const removeItemBtn = document.createElement('div');
		removeItemBtn.classList.add('remove-itemBtn');
		removeItemBtn.innerText = 'x';


		billItemText.appendChild(itemTitle);
		billItemText.appendChild(itemSubTitle);
		billItem.appendChild(billItemText);
		billItem.appendChild(billItemNumber);
		billItem.appendChild(billItemCost);
		billItem.appendChild(removeItemBtn);

		detailsInfo.appendChild(billItem);


		itemTotalResult = itemTotalResult + Number(pizzaResult);

		createBill();

		removeItemBtn.addEventListener('click',removeOrderItem);
}


function removeOrderItem(){
	itemTotalResult = itemTotalResult - Number(this.previousElementSibling.innerText);
	this.parentElement.remove();
	createBill()
	console.log(itemTotalResult);
}

function createBill() {
	const totalText = document.querySelector('.item-totalText');
	const discountText = document.querySelector('.item-discountText');
	const taxesText = document.querySelector('.item-taxesText');
	const payText = document.querySelector('.item-payText');

	const inpItemTotal = document.querySelector('.inp-itemTotal');
	const inpDiscount = document.querySelector('.inp-discount');
	const inpTaxes = document.querySelector('.inp-taxes');
	const inpTotal = document.querySelector('.inp-total');	

	totalText.innerText = `$ ${itemTotalResult.toFixed(2)}`;
	discountText.innerText = `-$ ${((1 - discountIndex) * itemTotalResult).toFixed(2)}`;
	taxesText.innerText = `$ ${(0.06 * itemTotalResult).toFixed(2)}`;
	payText.innerText = `$ ${((0.06 + discountIndex) * itemTotalResult).toFixed(2)}`;

	inpItemTotal.value = `$ ${itemTotalResult.toFixed(2)}`;
	inpDiscount.value = `-$ ${((1 - discountIndex) * itemTotalResult).toFixed(2)}`;
	inpTaxes.value = `$ ${(0.06 * itemTotalResult).toFixed(2)}`;
	inpTotal.value = `$ ${((0.06 + discountIndex) * itemTotalResult).toFixed(2)}`;
}


// SEND MAIL
 
async function submitForm(event) {
	event.preventDefault();
	try {
	  const response = await fetch(event.target.action, {
		  method: 'POST',
		  body: new FormData(event.target)
	  });
	  if (!response.ok) throw (`Помилка при зверненні до серверу: ${response.status}`);
	  const contentType = response.headers.get('content-type');
	  if (!contentType || !contentType.includes('application/json')) {
		throw ('Помилка обробки. Відповідь не JSON');
	  }
	  const json = await response.json();
	  if (json.result === "success") {
		  alert(json.info);
	  } else { 
		  console.log(json);
		  throw (json.info);
	  }
	} catch (error) {
	  alert(error);
	}
  }