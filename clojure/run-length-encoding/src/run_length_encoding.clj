(ns run-length-encoding)

(defn run-length-encode
  [plain-text]
  (->> (partition-by identity plain-text)
       (mapcat (juxt count first))
       (remove #{1})
       (apply str)))

(defn run-length-decode
  [cipher-text]
  (->> (re-seq #"(\d*)(\D)" cipher-text)
       (mapcat (fn [[_ num letter]] (repeat
                                     (if (not-empty num) (Integer/parseInt num) 1)
                                     letter)))
       (apply str)))
