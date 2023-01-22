import "./styles.css";


const htmlObj = {

default: () => {
    const originalDiv = document.querySelector('.content');

    //function that creates div, gives it a class
    //and assigns textContent

    const createDiv = (divClass, textContent) => {
        const div = document.createElement('div');
        div.classList.add(divClass);
        div.textContent = textContent;
        return div;
    }

    const appendChildren = (daddy, obj) => {
        for (let child in obj){
console.log(child);
console.log(obj.child);
            console.log(obj[child]);
           daddy.appendChild(obj[child]);
        }
    }
    
const children = {
    logo: createDiv('top-logo', 'The Risteronto'),
    tabOrigin: createDiv('tabs', ''),
    tabContent: createDiv('tab-content', ''),
}
const tabChildren = {
    tab1: createDiv('tab', 'Home'),
    tab2: createDiv('tab', 'Menu'),
    tab3: createDiv('tab', 'About'),
    tab4: createDiv('tab', 'Contact Us'),
}

const tabContentChild = {
    tab1: createDiv('main-drag', "Welcome home."),
}

appendChildren(children['tabContent'], tabContentChild);
appendChildren(children['tabOrigin'], tabChildren);
appendChildren(originalDiv, children);


},





};

htmlObj.default();
console.log('hello');