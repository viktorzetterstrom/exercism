#!/usr/bin/env bash
function main() {
  echo "One for $1, one for me.";
}
main "${1:-you}"
