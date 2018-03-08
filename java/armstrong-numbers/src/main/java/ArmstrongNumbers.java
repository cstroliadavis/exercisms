class ArmstrongNumbers {

    boolean isArmstrongNumber(int numberToCheck) {
        int currentNumber = numberToCheck;
        int power = String.valueOf(numberToCheck).length();
        int resultToCheck = 0;

        while (currentNumber > 0) {
            resultToCheck += Math.pow((currentNumber % 10), power);
            currentNumber /= 10;
        }
        return numberToCheck == resultToCheck;
    }

}
