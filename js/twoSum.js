
function twoSum(numbers, target) {
    const findComplementIndex = (number, i) => {
        const remainingNumbers = numbers.slice(i + 1);
        const complementIndex = remainingNumbers.findIndex(complement => number + complement === target);
        return complementIndex !== -1 ? [i, complementIndex + i + 1] : null;
    };
    const addends = numbers.map(findComplementIndex);
    const twoNumbersToGetTarget = addends.find(adden => adden !== null);
    return twoNumbersToGetTarget;
}


export default twoSum;