function updatePhoneChange(isIncrease ){
    const caseNumberField=document.getElementById('input-phone-field');
   const previousCaseNuberFieldString=caseNumberField.value;
   const previousCaseNumberField=parseInt(previousCaseNuberFieldString);

   let newCaseNumber;

   if(isIncrease === true){
       newCaseNumber=previousCaseNumberField+1;
   }
   else{
       newCaseNumber=previousCaseNumberField-1;
   }

   caseNumberField.value=newCaseNumber;
   return newCaseNumber;
}

function updatePhoneTotalCasePrice(newCaseNumber){
   const newCaseTotal=newCaseNumber*1219;
   const caseTotalElement=document.getElementById('phone-output-total');
   caseTotalElement.innerText=newCaseTotal;
}

 document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newCaseNumber= updatePhoneChange(true);
    updatePhoneTotalCasePrice(newCaseNumber);
    calcutorSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
   const newCaseNumber= updatePhoneChange(false);
   updatePhoneTotalCasePrice(newCaseNumber);
   calcutorSubTotal();  
})