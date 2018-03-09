const CONVERSIONS = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
};
const VALID_CHARS = /^[CGAT]*$/;

export default class Transcriptor {
    toRna(dna){
        if(dna.match(VALID_CHARS)){
            return dna
                .split('')
                .map(c => CONVERSIONS[c])
                .join('');
        }
        throw new Error('Invalid input DNA.');
    }
}