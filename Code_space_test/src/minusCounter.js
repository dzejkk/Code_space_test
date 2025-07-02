export function minusCounter (element) {

    let counter = 0;

    const minusCounter = (count) => {
        counter = count;
        element.innerHTML = ` COunt is : ${count}`

    }
    element.addEventListener('click', ()=> minusCounter(counter - 1));
    minusCounter(0)


}