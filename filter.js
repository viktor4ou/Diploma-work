//Избираме всички радио бутони с клас .filter
const btns = document.querySelectorAll('.filter');
//Избираме всикчи продукти с клас .store-product
const storeProducts = document.querySelectorAll('.store-product');

for (i = 0; i < btns.length; i++) {
    //За всеки бутон добавяме EventListerner на събитие change
    btns[i].addEventListener('change', (e) => {
        e.preventDefault()
        // Избираме всички продукти които отговарят на дадените параметри
        const filter = e.target.dataset.filter;
        //Филтираме всички продукти
        storeProducts.forEach((product)=> {
            // ако филтъра е all показваме всички продукти
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                // показваме само тези които отговарят на дадените параметри
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } // ако не отговарят скриваме ги
                else { 
                    product.style.display = 'none'
                }
            }
        });
    });
};

