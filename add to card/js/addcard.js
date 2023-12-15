const addcarsdata = JSON.parse(localStorage.getItem("addcart"));

function addtocard (){
    
    addcarsdata.map((value, index) => {
        const adddatashow = document.getElementById("carddata")
        adddatashow.innerHTML += `
        <div class="flex-grow-[2] flex-shrink flex flex-col gap-x-2.5 ">
            <div class="p-2 border border-solid border-slate-950 flex items-center w-full bg-white ">
            <img src="${value.img}" alt="" class="w-28 h-36 m-auto mr-7 object-contain">
                <div class="w-full flex items-center justify-around gap-1 px-2">
                    <div class="flex-grow-[2] flex-shrink basis-0 flex flex-col justify-start gap-2">
                        <p>${value.product_name}</p>
                    </div>
                    <div class="flex-grow flex-shrink basis-0 flex items-center justify-between">
                        <h5 class="font-normal text-sm leading-[0]"> &#8377;${value.price} </h5>
                        <button onclick="productdeleat(${index})" class="m-2 flex items-center justify-center bg-white border border-solid border-red-600 text-xl text-red-600 w-6 h-6 cursor-pointer">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    }) 

}

addtocard();


function price(){
    
}

function productdeleat (index){
    addcarsdata.splice(index, 1)
    console.log(index);
    localStorage.setItem("addcart", JSON.stringify(addcarsdata));
    location.reload();

}
// localStorage.clear()