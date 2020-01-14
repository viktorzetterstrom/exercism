(ns bob)

(defn response-for [s]
  (cond
    (re-find #"^(?=.*[A-Z])[^a-z]+\?+$" s) "Calm down, I know what I'm doing!"
    (re-find #"\?\s*$" s) "Sure."
    (re-find #"^(?=.*[A-Z])[^a-z]+$" s) "Whoa, chill out!"
    (re-find #"^\s*$" s) "Fine. Be that way!"
    :else "Whatever."
    )
  )
