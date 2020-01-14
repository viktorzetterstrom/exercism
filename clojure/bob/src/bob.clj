(ns bob)

(defn askYell? [s] (re-find #"^(?=.*[A-Z])[^a-z]+\?+$" s))
(defn yell? [s] (re-find #"\?\s*$" s))
(defn ask? [s] (re-find #"^(?=.*[A-Z])[^a-z]+$" s))
(defn silence? [s] (re-find #"^\s*$" s))

(defn response-for [s]
  (cond
    (askYell? s) "Calm down, I know what I'm doing!"
    (yell? s) "Sure."
    (ask? s) "Whoa, chill out!"
    (silence? s) "Fine. Be that way!"
    :else "Whatever."
    )
  )
