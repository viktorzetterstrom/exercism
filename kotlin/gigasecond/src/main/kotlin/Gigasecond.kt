import java.time.LocalDate
import java.time.LocalDateTime

val GIGASECOND: Long = 1_000_000_000;

class Gigasecond(date: LocalDateTime) {
    constructor(date: LocalDate ): this(date.atStartOfDay())
    val date: LocalDateTime = date.plusSeconds(GIGASECOND)
}
