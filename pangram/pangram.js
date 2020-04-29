//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const ALPHA = Array('a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z')

export const isPangram = (str) => {
    let arr = str.toLowerCase().split('')
    arr = arr.filter(i => !(i == ' '))
    return ALPHA.every(i => arr.includes(i))
};
