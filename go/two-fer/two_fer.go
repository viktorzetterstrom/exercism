/*
	Package twofer gives one for anyone, with you as default, and one for me.
*/
package twofer

// ShareWith prints out one for (name) and one for me.
func ShareWith(name string) string {
	return "One for " + GetDefaultName(name) + ", one for me."
}

// GetDefaultName returns the default name if none is supplied.
func GetDefaultName(name string) string {
	if name == "" {
		return "you"
	}
	return name
}
