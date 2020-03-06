(ns clock)

(def minutes-per-day 1440)
(def minutes-per-hour 60)

(defn clock->string [clock]
  (str
   (format "%02d:" (quot clock minutes-per-hour))
   (format "%02d" (mod clock minutes-per-hour))))

(defn clock [hours minutes]
  (mod
   (+ (* hours 60) minutes)
   minutes-per-day))

(defn add-time [clock minutes]
  (mod
   (+ clock minutes)
   minutes-per-day))
