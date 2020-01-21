(ns series)

(defn slices [string length]
  (if (zero? length) [""]
  (->> (range (- (+ (count string) 1) length))
       (map #(subs string % (+ % length))))))
