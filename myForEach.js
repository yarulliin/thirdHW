function myForEach(returnFunc, arr) {
    if (typeof arr === 'object') {
        for (let i = 0; i < arr.length; i++) {
            returnFunc(arr[i], i, arr);
        }
    }
}