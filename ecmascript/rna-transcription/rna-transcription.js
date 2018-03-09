const CONVERSIONS = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
};

export default class Transcriptor {
    toRna(dna){
        return CONVERSIONS[dna];
    }
}