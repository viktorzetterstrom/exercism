object HandshakeCalculator {
    private val signals = mapOf(
        1 to Signal.WINK,
        2 to Signal.DOUBLE_BLINK,
        4 to Signal.CLOSE_YOUR_EYES,
        8 to Signal.JUMP
    )
    private const val reverseSignal = 16


    fun calculateHandshake(number: Int): List<Signal> {
        val handshake = signals.toList().mapNotNull {
            if (it.first and number > 0) it.second
            else null
        }

        return if (reverseSignal and number > 0) handshake.reversed() else handshake
    }
}
