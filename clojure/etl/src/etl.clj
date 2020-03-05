(ns etl
  (:require [clojure.string :as str]))

(defn transpose [[k v]]
  (zipmap (map str/lower-case v) (repeat k)))

(defn transform [source]
  (->> source
       (map transpose)
       (into {})))
