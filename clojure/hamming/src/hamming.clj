(ns hamming)

(defn distance [strand1 strand2]
  (if (= (count strand1) (count strand2))
    (->> (map vector strand1 strand2)
         (map (fn [[a b]] (if (= a b) 0 1)))
         (apply +))
    nil))
