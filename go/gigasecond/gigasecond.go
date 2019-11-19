// Package gigasecond determines what time it will be a gigasecond from now.
package gigasecond

import (
	"time"
)

const GIGASECOND = 1000000000

// AddGigasecond adds a gigasecond to time passed as argument and returns the resulting time.
func AddGigasecond(t time.Time) time.Time {
	return t.Add(time.Second * GIGASECOND)
}
