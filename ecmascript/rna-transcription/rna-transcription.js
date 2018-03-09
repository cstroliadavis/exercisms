const CONVERSIONS = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
};
const validChars = new RegExp(`^[${Object.keys(CONVERSIONS).join('')}]+$`);

export default class Transcriptor {
    toRna(dna){
        if(dna.match(validChars)){
            return dna
                .split('')
                .map(c => CONVERSIONS[c])
                .join('');
        }
        throw new Error('Invalid input DNA.');
    }
}