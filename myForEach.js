function myForEach(returnFunc, arr) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            returnFunc(arr[i], i, arr);
        }
    }
}