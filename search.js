//Зареждаме цялата информация за продуктите от дата базата
import {shopItemsData} from './DataBase/searchData.js';	
let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');
//Когато кликнем на иконата за търсене ,показваме input-a
search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

let search_bx2 = document.getElementsByClassName('search_bx2')[0];

//Когато страницата се зареди ,зареждаме всички елементи
window.addEventListener('load', () => {
    //За всеки елемент от shopItemsData създаваме елемент от тип a
    shopItemsData.forEach(element => {
        const { img, name, url } = element;
        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content2">
            <h6>${name}</h6>
        </div>`;
        //Залепяме card към search_bx2
        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    //Задаваме стойноста на филтер с UpperCase за да не се различава между главни и малки букви
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        //Вземаме си всички елемиенти с таговете h6 и всички елементи с class content2
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        //Когато продукта е намерен 
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        //Когато продукта не е намерен 
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})