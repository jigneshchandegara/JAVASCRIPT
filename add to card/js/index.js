const product = [
    {
        id: 1,
        product_name: "shoes",
        img: src = "image/shoes.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 500
    },
    {
        id: 2,
        product_name: "women Moto Biker Jacket",
        img: src = "image/women Moto Biker Jacket.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 1100
    },
    {
        id: 3,
        product_name: "Google Pixel 7a",
        img: src = "image/Google Pixel 7a.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 25000
    },
    {
        id: 4,
        product_name: "Dinner Set",
        img: src = "image/Dinner Set.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 5000
    },
    {
        id: 5,
        product_name: "Formal Shirt and Trousers",
        img: src = "image/Formal Shirt and Trousers.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 1500
    },
    {
        id: 6,
        product_name: "men Jacket",
        img: src = "image/men Jacket.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 1200
    },
    {
        id: 7,
        product_name: "Men Solid Round T-Shirt",
        img: src = "image/Men Solid Round T-Shirt.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 900
    },
    {
        id: 8,
        product_name: "men socks",
        img: src = "image/men socks.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 500
    },
    {
        id: 9,
        product_name: "BIYLACLESEN Women's",
        img: src = "image/BIYLACLESEN Women's.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 1300
    },
    {
        id: 10,
        product_name: "Opna Women's Short Sleeve Moisture",
        img: src = "image/Opna Women's Short Sleeve Moisture.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 1400
    },
    {
        id: 11,
        product_name: "Women's Solid Short Sleeve Boat Neck V",
        img: src = "image/Women's Solid Short Sleeve Boat Neck V.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 1500
    },
    {
        id: 12,
        product_name: "women Jacket",
        img: src = "image/women Jacket.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 1600
    },
    {
        id: 13,
        product_name: "Samsung Galaxy S21 FE 5G",
        img: src = "image/Samsung Galaxy S21 FE 5G.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 41000
    },
    {
        id: 14,
        product_name: "APPLE iPhone 15",
        img: src = "image/APPLE iPhone 15.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 120000
    },
    {
        id: 15,
        product_name: "Infinix Note 30 5G",
        img: src = "image/Infinix Note 30 5G.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 17000
    },
    {
        id: 16,
        product_name: "Nothing Phone (2)",
        img: src = "image/Nothing Phone (2).webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 21000
    },
    {
        id: 17,
        product_name: "Tygot  LED Ring Light",
        img: src = "image/Tygot  LED Ring Light.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 2000
    },
    {
        id: 18,
        product_name: "blood-pressure-machine",
        img: src = "image/blood-pressure-machine.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 2300
    },
    {
        id: 19,
        product_name: "boAt Matrix Smart Watch",
        img: src = "image/boAt Matrix Smart Watch.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 4500
    },
    {
        id: 20,
        product_name: "jbl Speaker",
        img: src = "image/jbl Speaker.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 4999
    },
    {
        id: 21,
        product_name: "Seater Sofa",
        img: src = "image/Seater Sofa.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 15000
    },
    {
        id: 22,
        product_name: "Wireless Router",
        img: src = "image/Wireless Router.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 2800
    },
    {
        id: 23,
        product_name: "Tea Stainless Steel Coffee Mug",
        img: src = "image/Tea Stainless Steel Coffee Mug.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 1400
    },
    {
        id: 24,
        product_name: "Snowberry Plastic Grocery Container",
        img: src = "image/Snowberry Plastic Grocery Container.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 3500
    },
    {
        id: 25,
        product_name: "Coffee Table",
        img: src = "image/Coffee Table.webp",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, iusto.",
        price: 7000
    },

]


localStorage.setItem("products", JSON.stringify(product));

let productdata = JSON.parse(localStorage.getItem("products")) || [];


function productshow() {
    productdata.map((value, index) => {
        const divbody = document.getElementById("div-box");
        divbody.innerHTML += `
            <div class="p-2 ">
                <div class="w-60 h-96 rounded-t-lg border-2 border-slate-400 rounded relative flex flex-col">
                    <img src="${value.img}" class="w-full rounded-t-lg h-40 align-middle" alt="...">
                    <div class="p-4 bg-white">
                        <h5 class="mb-2 text-lg font-semibold">${value.product_name}</h5>
                        <p class="mt-0 mb-1">${value.description}</p>
                        <p class="mt-0 mb-1">&#8377; ${value.price} </p>
                        <button onclick="acard(${index})" ><a href="#" class="px-3 py-2 text-base font-normal bg-blue-500 text-white ">add to card</a></button>
                    </div>
                </div>
            </div>`;
    })
   
    
    
}
productshow();

function price1(){
    const a = productdata.filter((e) => e.price >=100 && e.price <1000);
    const page = document.getElementById("pricedata1");
    console.log(page);
    a.map((x,index) => {
        console.log("tital :- " + x.product_name + "<br>")
        page.innerHTML += `
            <div class="p-2 ">
                <div class="w-60 h-96 rounded-t-lg border-2 border-slate-400 rounded relative flex flex-col">
                    <img src="${x.img}" class="w-full rounded-t-lg h-40 align-middle" alt="...">
                    <div class="p-4 bg-white">
                        <h5 class="mb-2 text-lg font-semibold">${x.product_name}</h5>
                        <p class="mt-0 mb-1">${x.description}</p>
                        <p class="mt-0 mb-1">&#8377; ${x.price} </p>
                        <button onclick="acard(${index})" ><a href="#" class="px-3 py-2 text-base font-normal bg-blue-500 text-white ">add to card</a></button>
                    </div>
                </div>
            </div>`;
    });
    
}

function price2(){
    const a = productdata.filter((e) => e.price >=1000 && e.price <5000);
    const page = document.getElementById("pricedata2");
    a.map((x,index) => {
        console.log("tital :- " + x.product_name + "<br>")
        page.innerHTML += `
            <div class="p-2 ">
                <div class="w-60 h-96 rounded-t-lg border-2 border-slate-400 rounded relative flex flex-col">
                    <img src="${x.img}" class="w-full rounded-t-lg h-40 align-middle" alt="...">
                    <div class="p-4 bg-white">
                        <h5 class="mb-2 text-lg font-semibold">${x.product_name}</h5>
                        <p class="mt-0 mb-1">${x.description}</p>
                        <p class="mt-0 mb-1">&#8377; ${x.price} </p>
                        <button onclick="acard(${index})" ><a href="#" class="px-3 py-2 text-base font-normal bg-blue-500 text-white ">add to card</a></button>
                    </div>
                </div>
            </div>`;
    });
    
}

function price3(){
    const a = productdata.filter((e) => e.price >=5000 && e.price <10000);
    const page = document.getElementById("pricedata3");
    a.map((x,index) => {
        console.log("tital :- " + x.product_name + "<br>")
        page.innerHTML += `
            <div class="p-2 ">
                <div class="w-60 h-96 rounded-t-lg border-2 border-slate-400 rounded relative flex flex-col">
                    <img src="${x.img}" class="w-full rounded-t-lg h-40 align-middle" alt="...">
                    <div class="p-4 bg-white">
                        <h5 class="mb-2 text-lg font-semibold">${x.product_name}</h5>
                        <p class="mt-0 mb-1">${x.description}</p>
                        <p class="mt-0 mb-1">&#8377; ${x.price} </p>
                        <button onclick="acard(${index})" ><a href="#" class="px-3 py-2 text-base font-normal bg-blue-500 text-white ">add to card</a></button>
                    </div>
                </div>
            </div>`;
    });
    
}

function price4(){
    const a = productdata.filter((e) => e.price >=10000 && e.price <150000);
    const page = document.getElementById("pricedata4");
    a.map((x,index) => {
        console.log("tital :- " + x.product_name + "<br>")
        page.innerHTML += `
            <div class="p-2 ">
                <div class="w-60 h-96 rounded-t-lg border-2 border-slate-400 rounded relative flex flex-col">
                    <img src="${x.img}" class="w-full rounded-t-lg h-40 align-middle" alt="...">
                    <div class="p-4 bg-white">
                        <h5 class="mb-2 text-lg font-semibold">${x.product_name}</h5>
                        <p class="mt-0 mb-1">${x.description}</p>
                        <p class="mt-0 mb-1">&#8377; ${x.price} </p>
                        <button onclick="acard(${index})" ><a href="#" class="px-3 py-2 text-base font-normal bg-blue-500 text-white ">add to card</a></button>
                    </div>
                </div>
            </div>`;
    });
    
}

function acard(index) {
    const addcars = JSON.parse(localStorage.getItem("addcart")) || [];
    
    addcars.push(productdata[index]);
  
    location.reload();
    localStorage.setItem("addcart", JSON.stringify(addcars));
     
}





// localStorage.clear()    


