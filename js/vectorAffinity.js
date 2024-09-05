const vectorAffinity = (vector1, vector2) => {
    const maxLength = Math.max(vector1.length, vector2.length);
    const minLength = Math.min(vector1.length, vector2.length);
    const sum = vector1.slice(0, minLength).reduce((acc, val, i) => acc + (val === vector2[i] ? 1 : 0), 0);
    return maxLength===0 ? 1 : sum / maxLength;
}

export default vectorAffinity;

