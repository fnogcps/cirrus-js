//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (gs) => {
    return new Date((gs.getTime() + Math.pow(10, 12)))
};

