object Flattener {
    fun flatten(source: Collection<Any?>): List<Any> {
        var flattened = mutableListOf<Any>();

        fun flattener(s: Collection<Any?>) {
            s.forEach {
                if (it is Collection<Any?>) flattener(it)
                else if (it != null) flattened.add(it)
            }
        }
        flattener(source)

        return flattened;
    }
}
