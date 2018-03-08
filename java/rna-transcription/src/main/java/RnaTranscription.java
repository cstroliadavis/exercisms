import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

class RnaTranscription {
    private static final Map<String, String> CONVERSIONS = buildConversions();

    String transcribe(String dnaStrand) {
        return CONVERSIONS.get(dnaStrand);
    }

    private static Map<String, String> buildConversions() {
        Map<String, String> result = new HashMap<>();
        result.put("C", "G");
        result.put("G", "C");
        result.put("T", "A");
        return Collections.unmodifiableMap(result);
    }
}
