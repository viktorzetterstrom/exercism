(ns hamming)

(defn distance [strand1 strand2]
  (if (= (count strand1) (count strand2))
    (->> (map #(list %1 %2) (seq strand1) (seq strand2))
         (map #(if (apply = %) 0 1))
         (reduce +))
    nil))
