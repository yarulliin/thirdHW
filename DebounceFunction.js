let timeoutID;
let startTime;

function createDebounceFunction(func, timeout) {
    return function() {
        if (new Date().getTime() < (startTime + timeout)) {
            clearTimeout(timeoutID);
        }

        startTime = new Date().getTime();
        timeoutID = setTimeout(func, timeout); 
        return timeoutID;
    }
}