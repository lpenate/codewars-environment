
function zipWith(fn,array1,array2) {
    const slicedArray=array1.slice(0,array2.length)
    return slicedArray.map((array1Element,i)=>fn(array1Element,array2[i]));
}






export default zipWith;