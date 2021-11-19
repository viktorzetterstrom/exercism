class Node<T> (val value: T, var next: Node<T>? = null, var prev: Node<T>? = null) {


}

class Deque<T> {
    private var first: Node<T>? = null
    private var last: Node<T>? = null

    fun push(value: T) = last.let {
        last = Node(value = value, prev = last)
        it?.next = last
        first = first ?: last
    }

    fun pop(): T? = last.let {
        last = it?.prev
        if (last == null) first = null
        return it?.value
    }

    fun unshift(value: T) = first.let {
        first = Node(value = value, next = first)
        it?.prev = first
        last = last ?: first
    }

    fun shift(): T? = first.let {
        first =  it?.next
        if (first == null) last = null
        return it?.value
    }
}
