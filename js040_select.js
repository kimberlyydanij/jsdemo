document.frm.onsubmit = () => {
    let optFruit = document.frm.fruit;
    console.log(optFruit);

    let optSelect = optFruit.selectedIndex;
    console.log(`${optSelect}`);

    return false;
};