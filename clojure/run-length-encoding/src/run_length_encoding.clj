(ns run-length-encoding)

(defn encode-repeating-letters
  [s]
  (if (> (count s) 1)
    (str (count s) (subs s 0 1))
    s))

(defn split-repeating-letters
  [s]
  (map first (re-seq #"(.)\1*" s)))

(defn run-length-encode
  [plain-text]
  (apply str (map encode-repeating-letters (split-repeating-letters plain-text))))



(defn split-cipher
  [s]
  (rest (re-matches #"(\d+)(.)" s)))

(defn decode-cipher
  [cipher]
  (if (> (count cipher) 1)
    (apply str
           (repeat
            (read-string (first (split-cipher cipher)))
            (second (split-cipher cipher))))
    cipher))

(defn get-ciphers
  [cipher-text]
  (map first (re-seq #"(\d*.)" cipher-text)))

(defn run-length-decode
  [cipher-text] 
  (apply str
         (map
          decode-cipher
          (get-ciphers cipher-text))))
