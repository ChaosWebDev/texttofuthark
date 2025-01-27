import letters from "./unicode";

function toFuthark(latin) {
    const lowerCaseLatin = latin.toLowerCase();
    let futharkString = "";

    for (let i = 0; i < lowerCaseLatin.length; i++) {
        const char = lowerCaseLatin[i];
        const row = letters.find(letter => letter.latin === char);
        futharkString += row ? row.symbol : char;
    }

    return futharkString;
}

function toLatin(futhark) {
    let latinString = "";
    for (let i = 0; i < futhark.length; i++) {
        const rune = futhark[i];
        const row = letters.find(letter => letter.symbol === rune || letter.latin === rune);
        latinString += row ? row.latin : rune;
    }
    return latinString;
}

export { toFuthark, toLatin };