const CONVERSIONS = {
    'C': 'G',
    'G': 'C',
    'A': 'U'
};

export default class Transcriptor {
    toRna(dna){
        return CONVERSIONS[dna];
    }
}