function createDebounceFunction(func, timeout) {
    let timeoutID;
    let startTime;

    return function() {
        if (new Date().getTime() < (startTime + timeout)) {
            clearTimeout(timeoutID);
        }

        startTime = new Date().getTime();
        timeoutID = setTimeout(func, timeout); 
        return timeoutID;
    }
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 5000);

debounceLog100();
setTimeout(debounceLog100, 5000);
//setTimeout(debounceLog100, 400);