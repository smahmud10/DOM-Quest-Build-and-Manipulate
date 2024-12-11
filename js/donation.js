const bolg = document.getElementById("blog");
bolg.addEventListener("click", function () {
  window.location.href = '../blog.html';
})

//------DonationBtn  funcation-1

const donate = document.getElementById('donate-btn');
donate.addEventListener('click',function(){
  const inputMoney =  inputField('donate-input');

 if (inputMoney<=0 || isNaN(inputMoney)) {
    alert("please input valid number")
    return;
 }


    const balance = textFeild('donate-amount');

    const newBalance = balance + inputMoney;


  const oldBalance = textFeild('balance-amount');
  if (inputMoney>oldBalance) {
    alert("You don't have enough money");
    return;
  }

  const restBalance = oldBalance-inputMoney;
  document.getElementById('donate-amount').innerText = newBalance;
  document.getElementById('balance-amount').innerText=restBalance;


  const historyItem = document.createElement('div');
  historyItem.className = "w-11/12 py-5 mx-auto my-10 text-center bg-slate-200";
  historyItem.innerHTML=`

  <span class="font-bold"> ${inputMoney} Taka is Donated for  Donate for Flood Relief in Feni,Bangladesh
  <br />
     Date : ${new Date().toLocaleDateString()};
  </span>
  `
  const historyContainer = document.getElementById('history-container');
  historyContainer.appendChild(historyItem);
  console.log(historyContainer)

// Show Modal----->>

  const modal = document.getElementById("my-modal");
  modal.showModal();

});

//------DonationBtn  funcation-2

const donate2 = document.getElementById('donate-btn2');
donate2.addEventListener('click',function(){
  const inputMoney =  inputField('donate-input2');
console.log((inputMoney))
 if (inputMoney<=0 || isNaN(inputMoney)) {
    alert("please input valid number")
    return;
 }


    const balance2 = textFeild('donate-amount2');

    const newBalance2 = balance2 + inputMoney;


  const oldBalance2 = textFeild('balance-amount');

  if (inputMoney>oldBalance2) {
    alert("You don't have enough money");
    return;
  }

  const restBalance2 = oldBalance2-inputMoney;
  document.getElementById('donate-amount2').innerText = newBalance2;
  document.getElementById('balance-amount').innerText=restBalance2;
  const modal = document.getElementById("my-modal");
  modal.showModal();

});

//------DonationBtn  funcation-3
const donate3 = document.getElementById('donate-btn3');
donate3.addEventListener('click',function(){
  const inputMoney =  inputField('donate-input3');
console.log((inputMoney))
 if (inputMoney<=0 || isNaN(inputMoney)) {
    alert("please input valid number")
    return;
 }
else{



    const balance3 = textFeild('donate-amount3');
    const newBalance3 = balance3 + inputMoney;


  const oldBalance3 = textFeild('balance-amount');

  if (inputMoney>oldBalance3) {
    alert("You don't have enough money");
    return;
  }

  const restBalance3 = oldBalance3-inputMoney;
  document.getElementById('donate-amount3').innerText = newBalance3;
  document.getElementById('balance-amount').innerText=restBalance3;
  const modal = document.getElementById("my-modal");
  modal.showModal();
}
});

//  buton

const historyTab = document.getElementById('history');
const donationTab = document.getElementById('donation');

// history buton

historyTab.addEventListener('click',function(){

historyTab.classList.add('bg-[#B4F461]', 'py-2', 'px-10','border', 'text-black', 'rounded-md')
donationTab.classList.remove('bg-[#B4F461]',  'rounded-md')
document.getElementById('card').classList.add('hidden')
document.getElementById('footer').classList.add('hidden')

document.getElementById('history-container').classList.remove('hidden');
})
donationTab.addEventListener('click',function(){

  historyTab.classList.remove('bg-[#B4F461]', 'rounded-md')
  donationTab.classList.add('bg-[#B4F461]', 'py-2', 'px-10','border', 'text-black', 'rounded-md')
  document.getElementById('card').classList.remove('hidden')
  document.getElementById('footer').classList.remove('hidden')
  document.getElementById('history-container').classList.add('hidden');

  })
