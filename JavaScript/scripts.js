let MainDishSelection;
let MainDishName;
let MainDishPrice;
let DrinkSelection;
let DrinkName;
let DrinkPrice;
let DesertSelection;
let DesertName;
let DesertPrice;

function FinishOrder() {
    let TotalPrice = MainDishPrice + DrinkPrice + DesertPrice;
    TotalPrice = TotalPrice.toFixed(2);
    let WhatsappMessage = "Olá, gostaria de fazer o pedido:\n";
    WhatsappMessage = WhatsappMessage + "- Prato: " + MainDishName + "\n";
    WhatsappMessage = WhatsappMessage + "- Bebida: " + DrinkName + "\n";
    WhatsappMessage = WhatsappMessage + "- Sobremesa: " + DesertName + "\n";
    WhatsappMessage = WhatsappMessage + "Total: R$ " + TotalPrice;
    let WebLink = "https://wa.me/5521988405128?text=" + encodeURIComponent(WhatsappMessage);
    window.open(WebLink, '_blank');
}

function TransformPriceIntoNumber(StringPrice) {
    StringPrice = StringPrice.replace("R$ ","");
    StringPrice = StringPrice.replace(",",".");
    let NumberPrice = Number(StringPrice);
    return NumberPrice
}

function ActivateMainDish(ThisElement) {
    DeactivateOtherItems(ThisElement);
    MainDishSelection = ThisElement;
    MainDishSelection.classList.add("activated-item");
    MainDishName = MainDishSelection.querySelector(".item-title").innerHTML;
    MainDishPrice = MainDishSelection.querySelector(".item-price").innerHTML;
    MainDishPrice = TransformPriceIntoNumber(MainDishPrice);    
    EvaluateBottomButton();
}

function ActivateDrink(ThisElement) {
    DeactivateOtherItems(ThisElement);    
    DrinkSelection = ThisElement;
    DrinkSelection.classList.add("activated-item");
    DrinkName = DrinkSelection.querySelector(".item-title").innerHTML;
    DrinkPrice = DrinkSelection.querySelector(".item-price").innerHTML;
    DrinkPrice = TransformPriceIntoNumber(DrinkPrice);
    EvaluateBottomButton();
}


function ActivateDesert (ThisElement) {
    DeactivateOtherItems(ThisElement);    
    DesertSelection = ThisElement;
    DesertSelection.classList.add("activated-item");
    DesertName = DesertSelection.querySelector(".item-title").innerHTML;
    DesertPrice = DesertSelection.querySelector(".item-price").innerHTML;
    DesertPrice = TransformPriceIntoNumber(DesertPrice);
    EvaluateBottomButton();
}

function DeactivateOtherItems(ThisElement) {
    let ElementParent = ThisElement.parentNode;
    let ActivatedElement = ElementParent.querySelector(".activated-item");
    if (ActivatedElement !== null){
        ActivatedElement.classList.remove("activated-item");
    }
}

function EvaluateBottomButton() {
    if ( MainDishSelection !== undefined && DrinkSelection !== undefined && DesertSelection !== undefined) {
        let BottomButton = document.querySelector(".bottom-bar button");
        BottomButton.classList.add("activated-button");
        BottomButton.innerHTML = "Fechar pedido";
        BottomButton.onclick = FinishOrder;
    }
}

