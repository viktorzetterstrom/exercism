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

(defn calc-collatz-step
  ([num]
   (if (= num 1)
     0
     (calc-collatz-step (pick-collatz-fn num) 0)))
  ([num, step]
   (if (= num 1)
     (+ step 1)
     (calc-collatz-step (pick-collatz-fn num) (+ step 1)))))

(defn collatz [num] (calc-collatz-step num))
