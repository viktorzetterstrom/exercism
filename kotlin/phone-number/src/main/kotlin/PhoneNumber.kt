class PhoneNumber(rawNumber: String) {

    val number: String

    init {
        val numbers = rawNumber.replace("\\D".toRegex(), "")
        val validNumbersRegex = """^1?[2-9]\d\d[2-9]\d{6}$""".toRegex()

        require(numbers.matches(validNumbersRegex))

        number = if (numbers.length == 11) numbers.drop(1) else numbers
    }

}
