(ns rna-transcription)

(def rna-transcription-map {\G \C, \C \G, \A \U, \T \A})

(defn dna-to-rna [dna-strand] (rna-transcription-map dna-strand))

(defn to-rna [dna]
  (if (re-matches #"^[ACGT]+$" dna)
    (apply str (map dna-to-rna (seq dna)))
    (throw (AssertionError. "Invalid dna sequence."))))
