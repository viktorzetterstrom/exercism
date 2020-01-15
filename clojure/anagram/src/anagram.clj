(ns anagram)
(require '[clojure.string :as str])

(defn get-sorted-lc-letters
  [s]
  (sort (str/split (str/lower-case s) #"")))

(defn is-anagram
  [s1 s2]
  (if (not= (str/lower-case s1) (str/lower-case s2))
    (= (get-sorted-lc-letters s1) (get-sorted-lc-letters s2))
    false))

(defn anagrams-for
  [word prospect-list]
  (vec
   (filter
    #(is-anagram word %)
    prospect-list)))

