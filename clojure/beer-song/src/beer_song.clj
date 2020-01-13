(ns beer-song)

(defn verse
  "Returns the nth verse of the song."
  [num]
  (cond
    (= num 0) "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    (= num 1) "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
    (= num 2) "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n"
    :else (str num " bottles of beer on the wall, " num " bottles of beer.\nTake one down and pass it around, " (- num 1) " bottles of beer on the wall.\n")))

(defn verse-nl
  "Returns the nth verse with an extra newline at the end."
  [num]
  (str (verse num) "\n"))

(defn sing
  "Given a start and an optional end, returns all verses in this interval. If
  end is not given, the whole song from start is sung."
  ([start]
   (apply str (concat (map verse-nl (range start 0 -1)) (list (verse 0)))))
  ([start end]
   (apply str (concat (map verse-nl (range start end -1)) (list (verse end))))))
