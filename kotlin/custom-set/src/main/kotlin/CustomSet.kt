class CustomSet(vararg values: Int) {

    val set = values.distinct().toMutableList()

    fun isEmpty(): Boolean = set.isEmpty()
    fun isSubset(other: CustomSet): Boolean = set.all { other.contains(it) }
    fun isDisjoint(other: CustomSet): Boolean = set.all { !other.contains(it) }
    fun contains(other: Int): Boolean = set.contains(other)
    fun intersection(other: CustomSet): CustomSet = CustomSet(*set.intersect(other.set).toIntArray())
    fun add(other: Int) = !contains(other) && set.add(other)

    override fun equals(other: Any?): Boolean {
        if (other is CustomSet) {
            return set.size == other.set.size && set.all { other.contains(it) }
        }

        return false;
    }

    operator fun plus(other: CustomSet): CustomSet = CustomSet(*(set + other.set).distinct().toIntArray())
    operator fun minus(other: CustomSet): CustomSet = CustomSet(*(set - other.set).toIntArray())
}
