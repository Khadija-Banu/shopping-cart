function getTextElementValueById(elementId){
    const totalElement=document.getElementById(elementId);
    const currentTotalElementString=totalElement.innerText;
    const currentTotalElement=parseInt(currentTotalElementString);
    return currentTotalElement;
}

function setTextElementValueById(elementId, value){
    const subTotalElement=document.getElementById(elementId);
    subTotalElement.innerText=value;

}
function calcutorSubTotal(){
    const currentPhoneTotal= getTextElementValueById('phone-output-total');
    const currentCaseTotal=getTextElementValueById('case-output-total');

    const currentSutTotal=currentPhoneTotal+currentCaseTotal;
    setTextElementValueById('sub-total', currentSutTotal);

    const taxAmountString=(currentSutTotal*0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);

    setTextElementValueById('tax-amount', taxAmount);

    const totalAmount=currentSutTotal+taxAmount;
    setTextElementValueById('total-amount',totalAmount);


    
}