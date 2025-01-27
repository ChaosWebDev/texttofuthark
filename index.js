const ttf = {
    latinToFutharkMap: {
        'a': 'ᛀ', 'b': 'ᛒ', 'c': 'ᛌ', 'd': 'ᛞ', 'e': 'ᛇ',
        'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᛇ', 'i': 'ᛁ', 'j': 'ᛃ',
        'k': 'ᛪ', 'l': 'ᛚ', 'm': 'ᛘ', 'n': 'ᚾ', 'o': 'ᛈ',
        'p': 'ᛓ', 'q': 'ᛐ', 'r': 'ᚱ', 's': 'ᛊ', 't': 'ᛏ',
        'u': 'ᚢ', 'v': 'ᚢ', 'w': 'ᚹ', 'x': 'ᛝ', 'y': 'ᛣ',
        'z': 'ᛦ'
    },

    futharkToLatinMap: {
        'ᛀ': 'a', 'ᛒ': 'b', 'ᛌ': 'c', 'ᛞ': 'd', 'ᛇ': 'e',
        'ᚠ': 'f', 'ᚷ': 'g', 'ᛇ': 'h', 'ᛁ': 'i', 'ᛃ': 'j',
        'ᛪ': 'k', 'ᛚ': 'l', 'ᛘ': 'm', 'ᚾ': 'n', 'ᛈ': 'o',
        'ᛓ': 'p', 'ᛐ': 'q', 'ᚱ': 'r', 'ᛊ': 's', 'ᛏ': 't',
        'ᚢ': 'u', 'ᚢ': 'v', 'ᚹ': 'w', 'ᛝ': 'x', 'ᛣ': 'y',
        'ᛦ': 'z'
    },

    toFuthark(latin) {
        return latin
            .toLowerCase()
            .split('')
            .map(char => this.latinToFutharkMap[char] || char)
            .join('');
    },

    toLatin(futhark) {
        return futhark
            .split('')
            .map(char => {
                if (this.futharkToLatinMap[char]) {
                    return this.futharkToLatinMap[char];
                } else {
                    throw new Error(`Unknown Futhark character: ${char}`);
                }
            })
            .join('');
    }
};

export default ttf;