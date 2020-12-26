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