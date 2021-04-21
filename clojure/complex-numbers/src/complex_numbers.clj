(ns complex-numbers)

(defn real [[a b]]
  [a b])

(defn imaginary [[a b]]
  [a b])

(defn abs [[a b]])

(defn conjugate [[a b]])

(defn add [[a b] [c d]]
  [(+ a c) (+ b d)])

(defn sub [[a b] [c d]]
  [(- a c) (- b d)])

(defn mul [[a b] [c d]])

(defn div [[a b] [c d]])
