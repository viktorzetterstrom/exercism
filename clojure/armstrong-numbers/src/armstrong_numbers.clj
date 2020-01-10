(ns armstrong-numbers)

(defn exp [x n]
  (reduce * (repeat n x)))

(defn digits [num]
  (map #(Character/digit % 10) (seq (str num))))

(defn armstrong? [num]
  (== num
    (reduce + 
      (map #(exp (bigint %) (bigint (count (str num))))
        (digits num)))))
