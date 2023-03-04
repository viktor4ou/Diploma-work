const btns = document.querySelectorAll('.filter');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('change', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};



// This code has been replaced by the function(filterProducts) above which does a better job

// search.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     const searchValue = search.value.toLowerCase().trim();
//     // alert(search.value);

    
//     for (i = 0; i < storeProducts.length; i++) {
//         if (storeProducts[i].classList.contains(searchValue)) {
//             storeProducts[i].style.display = 'block';
//         } else if (searchValue == "") {
//             storeProducts[i].style.display = 'block';
//         } else {
//             storeProducts[i].style.display = 'none';    
//         }

//     //    if (searchValue == "") {
//     //     storeProducts[i].style.display = 'block';
//     //    }
        
//     }

// })


