let productUnitCost = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";


//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts() {
}

function updateSubtotal() {
    productCount = document.getElementById("productCountInput").value;
    subtotal = productCount * productCost;
    document.getElementById("productCostText").innerHTML = subtotal;
    document.getElementById("SubTotal").innerHTML = subtotal;


}

function showPaymentTypeNotSelected() {

}

function hidePaymentTypeNotSelected() {

}
//  Esto me muestra el pinito y todas sus atributos en el carrito
function showProductList(currentProductArray) {
    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductArray.length; i++) {
        let product = currentProductArray[i];
        htmlContentToAppend += `
            <a href="cart.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.src + `" alt="` + product.name + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name + `</h4>
                            <small class="text-muted">` + product.currency + " " + product.unitCost + ` artículos</small>
                        </div>                    
                        <input type="number" id="productCountInput" onClick= "updateSubtotal()"  value= "` + product.count + `" min="1"> </input>
                        <p class="mb-1">` + product.currency + " " + ` <a id=SubTotal> </a> </p> 
                    </div>
                </div>
             `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
    updateSubtotal();
};

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj);
            //showProductList(resultObj.data.articles);
            updateSubtotal();
        }
    });
});
