(ns word-count)
(require '[clojure.string :as str])

(defn strip-str
  [s]
  (apply str (re-seq #"[\w\d ]+" s)))

(defn word-list
  [s]
  (str/split (strip-str s) #" +"))

(defn count-occurences
  [word s]
  (count (filter #(= word %) (word-list s))))

(defn word-count [s]
  (->> (str/lower-case s)
       (word-list)
       (set)
       (map #(hash-map % (count-occurences % (str/lower-case s))))
       (apply merge)))
