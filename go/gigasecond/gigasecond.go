// Package gigasecond determines what time it will be a gigasecond from now.
package gigasecond

import (
	"time"
)

// AddGigasecond adds a gigasecond to time passed as argument and returns the resulting time.
func AddGigasecond(t time.Time) time.Time {
	return t.Add(time.Second * 1_000_000_000)
}
