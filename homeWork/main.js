// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const newBlock = document.createElement('div');
newBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');
newBlock.style.backgroundColor = 'red';
newBlock.style.color = 'black';
newBlock.style.fontSize = '30px';
document.body.appendChild(newBlock)
const newBlockClon = newBlock.cloneNode(true)
document.body.appendChild(newBlockClon)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
const myArray = ['Main', 'Products', 'About us', 'Contacts'];
const myMenu = document.getElementsByClassName('menu');
for (const string of myArray) {
    const newLi = document.createElement('li');
    newLi.innerText = string;
    for (const myMenu1 of myMenu) {
        myMenu1.appendChild(newLi);
    }
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesElement of coursesAndDurationArray) {
    const newBlock = document.createElement('div');
    newBlock.style.padding = '5px';
    newBlock.innerText = `tittle: ${coursesElement.title} month duration: ${coursesElement.monthDuration}`
    document.body.appendChild(newBlock);
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesElement of coursesAndDurationArray) {
    const newBlock = document.createElement('div')
    newBlock.innerHTML = `<h1 class="${coursesElement.title}"></h1> <p class="${coursesElement.monthDuration}"></p>`
    document.body.appendChild(newBlock)
}