var product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
           product = resultObj.data;
           
            let productNameHTML = document.getElementById("productName");
            productNameHTML.innerHTML = product.name;

            let productDescriptionHTML = document.getElementById("productDescription");
            productDescriptionHTML.innerHTML = product.description;

            let productCountHTML = document.getElementById("productSoldCount");
            productCountHTML.innerHTML = product.soldCount;

            let productCostHTML = document.getElementById("productCost");
            productCostHTML.innerHTML = product.cost;

            let productCurrencyHTML = document.getElementById("productCurrency");
            productCurrencyHTML.innerHTML = product.currency;

            showImagesGallery(product.images);
//Llama los productos del Json y muestra las caracteristicas del producto.
// Con la función showImagesGallery lo que hago es mostrar la imagenes n forma de galeria.
        }
    });
});