window.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");

  const hp650 = {
    name: "hp 650",
    color: "black",
    pageYield: 360,
    compatiblePrinters: [
      "1015",
      "15115",
      "2515",
      "2516",
      "2545",
      "2546",
      "2645",
      "3515 eAiO",
      "3545 eAiO",
      "4515 eAiO",
      "465 eAiO",
    ],
    price$: 22,
    imageSrc: "./images/hp650.jpg",
  };
  const hp652 = {
    name: "hp 652",
    color: "black",
    pageYield: 360,
    compatiblePrinters: [
      "1115",
      "2135",
      "3635",
      "3636",
      "3775",
      "3785",
      "3787",
      "3835",
      "4535",
      "4675",
      "5675",
    ],
    price$: 23,
    imageSrc: "./images/hp652.jpg",
  };
  const hp653 = {
    name: "hp 653",
    color: "black",
    pageYield: 360,
    compatiblePrinters: [
      "1115",
      "2135",
      "3635",
      "3636",
      "3775",
      "3785",
      "3787",
      "3835",
      "4535",
      "4675",
      "5675",
    ],
    price$: 30,
    imageSrc: "./images/hp652.jpg",
  };

  const cartridges = [hp650, hp652, hp653];
  const search = document.getElementById("search");
  search.addEventListener("click", () => {
    const input = document.getElementById("input");
    const inks = document.getElementById("inks");
    const img = document.getElementById("img");

    const numbers = [1, 2, 3, 4, 5, 6, 7];
    /* for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      console.log(`code is running at index ${number}`);
      console.log(`code is running at index ${number + 100}`);
    }
 */
    const newArray = cartridges.filter((cartridge) => {
      return cartridge.price$ > 22;
    });
    console.log(newArray);
    cartridges.forEach((cartridge) => {
      // console.log(" mother loop running")
      const regex2 = new RegExp(cartridge.name, "i");

      if (regex2.test(input.value)) {
        console.log(cartridge.price$);
        inks.innerText = cartridge.price$;
        img.src = cartridge.imageSrc;
      } else {
        console.log(cartridge.name + " failed the test");
        /*  cartridge.compatiblePrinters.forEach((printer) => {
          // console.log(" child lop running")

          // console.log(printer);
          if (input.value == printer) {
            inks.innerText = cartridge.price$;
          }
        }); */
      }
    });
  });
});
