const CONVERSIONS = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
};

export default class Transcriptor {
    toRna(dna){
        return dna
            .split('')
            .map(transcribeDnaCharToRna)
            .join('');
    }
}

function transcribeDnaCharToRna(chr){
    const out = CONVERSIONS[chr];
    if(out) {
        return out;
    }
    throw new Error('Invalid input DNA.');
}