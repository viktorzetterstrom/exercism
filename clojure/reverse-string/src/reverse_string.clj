(ns reverse-string)
(require '[clojure.string :as str])

(defn reverse-string [s]
  (apply str (reduce conj () s)))
