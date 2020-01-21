(ns series
  (:require [clojure.string :as str]))

(defn slices [string length]
  (if (zero? length) [""]
      (->> string
           (partition length 1)
           (mapv str/join))))
