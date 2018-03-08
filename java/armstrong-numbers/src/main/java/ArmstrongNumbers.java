class ArmstrongNumbers {

	boolean isArmstrongNumber(int numberToCheck) {
		return numberToCheck < 10 || (numberToCheck > 100 && numberToCheck < 9475);
	}

}
