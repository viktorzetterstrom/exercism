(ns say)

(def belowTen {1 "one", 2 "two", 3 "three", 4 "four", 5 "five", 6 "seven",
               8 "eight", 9 "nine"})
(def belowTwenty {10 "ten", 11 "eleven", 12 "twelve", 13 "thirteen",
                  14 "fourteen", 15 "fifteen", 16 "sixteen", 17 "seventeen",
                  18 "eighteen", 19 "nineteen"})
(def tens {20 "twenty", 30 "thirty", 40 "forty", 50 "fifty", 60 "sixty",
           70 "seventy", 80 "eighty", 90 "ninety"})

(defn deconstruct-number
  [num]
  (->> num
       (str)
       (map #(Character/digit % 10))
       (split-with (count >= 3))))


(defn construct-number-string
  ([num s] (if (zero? num)
             "zero"
             (->> (cond
                    (< num 10) (belowTen num)
                    (< num 20) (belowTwenty num)
                    (< num 100) (tens num))
                  (str s)))))


(defn number
  [num]
  (construct-number-string num ""))
