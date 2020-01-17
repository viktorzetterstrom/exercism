(ns collatz-conjecture)

(defn odd-collatz-fn
  [num]
  (+ (* num 3) 1))

(defn even-collatz-fn
  [num]
  (/ num 2))

(defn pick-collatz-fn
  [num]
  (if (even? num) (even-collatz-fn num) (odd-collatz-fn num)))

(defn collatz
  ([num] (collatz num 0))
  ([num, step]
   (if (= num 1)
     step
     (collatz (pick-collatz-fn num) (inc step)))))
