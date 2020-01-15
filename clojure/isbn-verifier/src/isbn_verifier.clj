(ns isbn-verifier)

(defn str-to-isbn-list
  [s]
  (map #(if (= % "X") 10 (Long/parseLong %)) (re-seq #"[\d]|X$" s)))

(defn isbn-sum
  [isbn-list]
  (mod
   (reduce +
           (map #(* %1 %2)
                isbn-list
                (range 10 0 -1)))
   11))

(defn isbn?
  [isbn]
  (if (re-matches #"\d-?\d{3}-?\d{5}-?[\dX]" isbn)
    (= (isbn-sum (str-to-isbn-list isbn)) 0)
    false))
