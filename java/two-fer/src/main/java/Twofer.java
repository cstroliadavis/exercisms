class Twofer {
    String twofer(String name) {
        String nameToUse = name == null ? "you" : name;
        return "One for " + nameToUse + ", one for me.";
    }
}
