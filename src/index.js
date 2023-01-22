// import "./styles.css";

const createDiv = (divClass, textContent) => {
    const div = document.createElement('div');
    div.classList.add(divClass);
    div.textContent = textContent;
    return div;
}

const childFunction = {
    appendChildren: (daddy, obj) => {
        for (let child in obj){
             daddy.appendChild(obj[child]);
        }
    },
    deleteAllChildren: (daddy) => {
        while (daddy.firstChild){
            daddy.removeChild(daddy.lastChild);
        }
    },
   
}

const parent = {
    originalDiv: document.querySelector('.content'),
    tabContent: document.querySelector('.tab-content'),
}

const childrenObj = {
    main: {
        logo: createDiv('top-logo', 'The Risteronto'),
    tabOrigin: createDiv('tabs', ''),
    tabContent: createDiv('tab-content', ''),
    },
    tab: {
        tab1: createDiv('tab', 'Home'),
        tab2: createDiv('tab', 'Menu'),
        tab3: createDiv('tab', 'About'),
        tab4: createDiv('tab', 'Contact Us'),
    },
    tabContent: {
        'Home': createDiv('main-drag', "Welcome home."),
        'Menu': createDiv('main-drag', "Welcome menu."),
        'About': createDiv('main-drag', "Welcome about."),
        'Contact Us': createDiv('main-drag', "Don't ever speak to me."),
    },
}

const htmlObj = {

    default: () => {
        const originalDiv = parent.originalDiv;
  
        childrenObj.main.tabContent.appendChild(childrenObj.tabContent['Home']);
        childFunction.appendChildren(childrenObj.main.tabOrigin, childrenObj.tab);
        childFunction.appendChildren(originalDiv, childrenObj.main);

    },
};

htmlObj.default();

document.querySelector('.content').addEventListener('click', (e)=>{
    console.log(e.target);
    const newTab = document.querySelector('.tab-content');
    if(e.target.classList.contains('tab')){
        console.log('clicked!');
        e.target.classList.toggle('active');
        let tabs = document.querySelector('.tabs').firstChild
        while (tabs){
            if(tabs!==e.target && tabs.classList.contains('active')){
                tabs.classList.toggle('active');
            }
            tabs = tabs.nextSibling;
        }

        const clickedText = e.target.textContent;
        childFunction.deleteAllChildren(newTab);

        newTab.appendChild(childrenObj.tabContent[`${clickedText}`]);
        
  
    }
   
});