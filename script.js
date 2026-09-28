// TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

// Ф-я скрывает tabs  и убирает active у кнопок
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// ф-ия показывает переданный номер tab-a и делает соответствующую кнопку active
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

//Якори
// при клике на ссылку пользователь перемещается по сайту
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function (event) {
        //отменить стандартное действие элемента
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        // console.log(id, elem);
        window.scroll({
            // cкролить по верхушке, перемещение по вертикали
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });

    });
});