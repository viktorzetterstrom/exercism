(ns grade-school)

(defn grade [school grade]
  (get school grade []))

(defn add [school name grade]
    (merge school {grade (vec (conj (school grade) name))}))

(defn sorted [school]
  (->> school
       (seq)
       (map (fn [[grade students]] [grade (sort students)]))
       (sort)
       (into {})))