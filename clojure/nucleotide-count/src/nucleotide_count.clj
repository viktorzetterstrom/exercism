(ns nucleotide-count)

(def nucleotides [\A \C \T \G])

(defn count-of-nucleotide-in-strand
  [nucleotide strand]
  (if-not (some #(= nucleotide %) nucleotides) 
    (throw (Throwable. "Bad nucleotide"))
    (->> strand
         (re-seq (re-pattern (str nucleotide)))
         (count))))


(defn nucleotide-counts [strand]
  (->> nucleotides
       (mapcat #(list % (count-of-nucleotide-in-strand % strand)))
       (apply hash-map)))
