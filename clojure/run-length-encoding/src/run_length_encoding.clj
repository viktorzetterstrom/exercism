(ns run-length-encoding)

(defn run-length-encode
  [plain-text]
  (->> (partition-by identity plain-text)
       (mapcat (juxt count first))
       (filter #(not= 1 %))
       (apply str)))


(defn decode-cipher
  ([letter] (decode-cipher 1 letter))
  ([num letter] (repeat (Integer/parseInt num) letter)))

(defn run-length-decode
  [cipher-text]
  (->> (re-seq #"(\d*)([\D])" cipher-text)
       (mapcat (fn [[_ num letter]] (if (empty? num)
                                      (decode-cipher letter)
                                      (decode-cipher num letter))))
       (apply str)))
