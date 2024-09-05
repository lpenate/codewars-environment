const findEvenIndex = (arr) => {
    const getMirrorIndex= arr
        .map((_arrElement, index) => {
            const leftSide= arr.slice(0, index);
            const rightSide= arr.slice(index+1);
            const leftSum = leftSide.reduce((sum, num) => sum + num, 0);
            const rightSum = rightSide.reduce((sum, num) => sum + num, 0);
            return leftSum === rightSum ? index : -1;
        })
    const findMirrorElementByIndex = getMirrorIndex.find(index => index !== -1);
    return findMirrorElementByIndex === undefined ? -1 : findMirrorElementByIndex;
};

export default findEvenIndex;