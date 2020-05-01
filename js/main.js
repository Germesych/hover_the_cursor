let blockRed = document.getElementById("block-red"); //Общий блок, блок родитель.
let redtext = document.getElementsByClassName("redtext"); // Класс к которому применим изменения
//Если мышь на блоке
blockRed.onmouseover = function (event) {
    for (let i = 0; i < redtext.length; i++) { //Перебор массива
        redtext[i].classList.add("redcolor"); //Перебираем массив. Выбираем все классы и добовляем новый класс - redcolor.
    }
};
//Отменяем если мышь не на блоке
blockRed.onmouseout = function (event) {
    for (let i = 0; i < redtext.length; i++) {
        redtext[i].classList.remove("redcolor");
    }
};