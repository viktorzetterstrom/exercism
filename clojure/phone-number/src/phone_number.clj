(ns phone-number
  (:require [clojure.string :as str]))

(def phone-regex #"^\+?1?\D*(\d\d\d)\D*(\d\d\d)\D*(\d\d\d\d)$")

(defn validate-number-length [num]
  (if (not= (count num) 10)
    "0000000000"
    num))

(defn number [num-string]
    (->> (re-matches phone-regex num-string)
         (rest)
         (str/join)
         (validate-number-length)))

(defn area-code [num-string]
  (second (re-matches phone-regex num-string)))

(defn pretty-print [num-string]
  (let [match (re-matches phone-regex num-string)]
       (apply (fn [a b c] (str "(" a ") " b "-" c)) (rest match))))
