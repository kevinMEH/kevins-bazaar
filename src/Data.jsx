import axios from "axios";

function getPage(page = 1, filter = "") {
    return new Promise((resolve) => {
        let params = filter ? { page, filter } : { page };
        axios.get("https://api.bazaar.liao.gg/api/products", { params }).then( response => {
            resolve({ error: null, products: response.data });
        }).catch( error => {
            resolve({ error, products: null });
        })
    })
}

function getProduct(productURL) {
    return new Promise((resolve) => {
        axios.get("https://api.bazaar.liao.gg/api/product/" + productURL).then( response => {
            if(!response.data) console.log("Note: " + productURL + " does not exist.");
            resolve({ error: null, product: response.data, url: productURL });
        }).catch( error => {
            resolve({ error, product: null, url: productURL });
        })
    });
}

export { getPage, getProduct };