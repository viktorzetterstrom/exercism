(ns leap)

(defn evenly-divisble-by
  [dividend divisor]
  (zero? (mod dividend divisor)))

(defn leap-year? [year]
  (if (evenly-divisble-by year 100)
    (evenly-divisble-by year 400)
    (evenly-divisble-by year 4)))
