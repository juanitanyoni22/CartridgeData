window.addEventListener("DOMContentLoaded",()=>{
    console.log("content loaded")
    
    
    const hp650={
        name:"hp 650",
        color:"black",
        pageYield:360,
        compatiblePrinters:["1015",'15115','2515','2516','2545',"2546",'2645',"3515 eAiO","3545 eAiO","4515 eAiO","465 eAiO"],
        price$:22,
        imageSrc:'./images/hp650.jpg'
        
        
    }
    const hp652={
        name:"hp 652",
        color:"black",
        pageYield:360,
        compatiblePrinters:["1115",'2135','3635','3636','3775','3785','3787','3835','4535','4675','5675'],
        price$:23,
        imageSrc:'./images/hp652.jpg'
    }
    const hp653={
        name:"hp 653",
        color:"black",
        pageYield:360,
        compatiblePrinters:["1115",'2135','3635','3636','3775','3785','3787','3835','4535','4675','5675'],
        price$:30,
        imageSrc:'./images/hp652.jpg'
    }


    const cartridge=[hp650,hp652]
    const search=document.getElementById("search") 
    search.addEventListener("click",()=>{

        const input=document.getElementById("input")
        

        if (input.value==hp650.name){
            console.log(hp650.price$)
        }
        else if(input.value==hp652.name){
            console.log(hp652.price$)
        }
        else if(input.value==hp653.name){
            console.log(hp653.price$)
        }
         /*    cartridge.forEach((cartridge)=>{
               

            if (input.value==cartridge.name){
                console.log(cartridge.price$)
            }
            }) */


    })
})