function updateChange(isIncrease ){
    const caseNumberField=document.getElementById('input-case-field');
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

function updateTotalCasePrice(newCaseNumber){
   const newCaseTotal=newCaseNumber*59;
   const caseTotalElement=document.getElementById('case-output-total');
   caseTotalElement.innerText=newCaseTotal;
}

 document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber= updateChange(true);
    updateTotalCasePrice(newCaseNumber); 
    calcutorSubTotal();   
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
   const newCaseNumber= updateChange(false);
    updateTotalCasePrice(newCaseNumber);
    calcutorSubTotal();  
})