// Pull products from API

function getProducts(page, filter) {
    let error = null;
    let productsWrapper = { products: 
        [
            {
                name: "Premium Wood Drawers", 
                thumbnail: "https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?auto=format&fit=crop&w=1740&q=80",
                price: "$120",
                url: "premium-wood-drawers",
            },
            {
                name: "Genuine Leather Mini-Couch", 
                thumbnail: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1740&q=80",
                price: "$240",
                url: "genuine-leather-mini-couch",
            },
            {
                name: "Soft Padded Linen Chair", 
                thumbnail: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?auto=format&fit=crop&w=774&q=80",
                price: "$180",
                url: "soft-padded-linen-chair",
            },
            {
                name: "Soft Pillowy Sofa", 
                thumbnail: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?auto=format&fit=crop&w=870&q=80",
                price: "$120",
                url: "soft-pillowy-sofa",
            },
            {
                name: "Padded Pink Square Pillows", 
                thumbnail: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1160&q=80",
                price: "$75",
                url: "padded-pink-square-pillows"
            },
            {
                name: "Premium Wood Floating Cabinet", 
                thumbnail: "https://images.unsplash.com/photo-1595515770331-60b61d5a7451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
                price: "$120",
                url: "premium-wood-floating-cabinet"
            },
        ],
        page: page,
        filter: filter,
    };
    return {error, productsWrapper}
}

function getFullProduct(product) {
    let error;
    let fullProduct = {desc: "Drawers and side tables made from premium walnut wood, available in an assortment of shapes and sizes. Whether it's for your front porch or your study, these drawers will stand the test of time.", ...product};
    return {error, fullProduct};
}

function validProduct(product) {
    // Is product in database?
    return true;
}

export { getProducts, getFullProduct, validProduct };