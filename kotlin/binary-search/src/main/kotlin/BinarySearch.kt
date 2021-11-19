object BinarySearch {
    fun search(list: List<Int>, item: Int): Int = (list.size / 2).let {
        if (list.isEmpty()) throw NoSuchElementException()

        if (item < list[it]) return search(list.subList(0, it), item)
        if (item > list[it]) return (it + 1) + search(list.subList(it + 1 , list.size), item)
        return it
    }
}
