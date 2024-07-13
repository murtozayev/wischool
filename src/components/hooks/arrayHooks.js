export function useMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    result.length = arr.length;
    return result;
}