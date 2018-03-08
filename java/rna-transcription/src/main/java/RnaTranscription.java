import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

class RnaTranscription {
    private static final Map<Character, Character> CONVERSIONS = buildConversions();

    String transcribe(String dnaStrand) {
        StringBuilder transcriber = new StringBuilder(dnaStrand);
        int index = dnaStrand.length();
        while(0 < index--){
            transcriber.setCharAt(index, CONVERSIONS.get(transcriber.charAt(index)));
        }
        return transcriber.toString();
    }

    private static Map<Character, Character> buildConversions() {
        Map<Character, Character> result = new HashMap<>();
        result.put('C', 'G');
        result.put('G', 'C');
        result.put('T', 'A');
        result.put('A', 'U');
        return Collections.unmodifiableMap(result);
    }
}
