class BankAccount {
    private var open = true

    var balance: Long = 0
        get() = ifOpen {
            return field
        }
        private set

    fun adjustBalance(amount: Long) = ifOpen {
        synchronized(this) {
            balance += amount
        }
    }

    fun close() {
       open = false
    }

    private inline fun <T> ifOpen(action: () -> T): T {
        check(open)
        return action()
    }
}
