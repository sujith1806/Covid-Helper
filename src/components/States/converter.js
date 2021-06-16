function changeNumberFormat(number, decimals, recursiveCall) {
    if(number<100000)
    {
        return number.toString();
    }
    const decimalPoints = decimals || 2;
    const noOfLakhs = number / 100000;
    let displayStr;
    let isPlural;

    // Rounds off digits to decimalPoints decimal places
    function roundOf(integer) {
        return +integer.toLocaleString(undefined, {
            minimumFractionDigits: decimalPoints,
            maximumFractionDigits: decimalPoints,
        });
    }

    if (noOfLakhs >= 1 && noOfLakhs <= 99) {
        const lakhs = roundOf(noOfLakhs);
        isPlural = lakhs > 1 && !recursiveCall;
        displayStr = `${lakhs} Lakh${isPlural ? 's' : ''}`;
    } else if (noOfLakhs >= 100) {
        const crores = roundOf(noOfLakhs / 100);
        const crorePrefix = crores >= 100000 ? changeNumberFormat(crores, decimals, true) : crores;
        isPlural = crores > 1 && !recursiveCall;
        displayStr = `${crorePrefix} Crore${isPlural ? 's' : ''}`;
    } else {
        displayStr = roundOf(+number);
    }

    return displayStr;
}

export default changeNumberFormat;