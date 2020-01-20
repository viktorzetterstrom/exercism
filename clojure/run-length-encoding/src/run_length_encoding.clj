(ns run-length-encoding)

(defn split-repeating-letters
  [s]
  (partition-by identity s))

(defn run-length-encode
  [plain-text]
  (apply str
         (map
          #(if (> (count %) 1) 
             (str (count %) (first %)) 
             (str (first %)))
          (split-repeating-letters plain-text))))



(defn decode-cipher
  ([letter] letter)
  ([num letter] (apply str (repeat (Integer/parseInt num) letter))))

(defn get-ciphers
  [cipher-text]
  (map #(apply decode-cipher (filter some? (rest %))) (re-seq #"(\d+)?([^\d])" cipher-text)))

(defn run-length-decode
  [cipher-text]
  (apply str (get-ciphers cipher-text)))
