#!/bin/bash

# Script to extract theme variants from globals.css into individual theme files

SOURCE_FILE="apps/akiapolaau/src/app/globals.css"
THEMES_DIR="apps/akiapolaau/src/styles/themes"

# List of theme classes to extract (excluding :root and .dark which are already done)
THEMES=(
  "slate-light"
  "slate-dark"
  "reda-salsa"
  "blue-light"
  "blue-dark"
  "green-light"
  "green-dark"
  "orange-light"
  "orange-dark"
  "red-light"
  "red-dark"
  "rose-light"
  "rose-dark"
  "stone-light"
  "stone-dark"
  "gray-light"
  "gray-dark"
  "neutral-light"
  "neutral-dark"
  "violet-light"
  "violet-dark"
  "yellow-light"
  "yellow-dark"
)

echo "Extracting themes from $SOURCE_FILE to $THEMES_DIR"

for theme in "${THEMES[@]}"; do
  output_file="$THEMES_DIR/${theme}.css"
  echo "Extracting $theme to $output_file"

  # Extract the theme block using awk
  awk "/^\s*\.$theme \{/,/^\s*\}/" "$SOURCE_FILE" | \
    # Replace .theme-name { with :root {
    sed "s/^\s*\.$theme {/:root {/" | \
    # Add --radius if not present (for consistency)
    awk 'BEGIN {printed_radius=0}
         /:root \{/ {print; print "  --radius: 0.5rem;"; next}
         /--radius/ {printed_radius=1; print; next}
         {print}' > "$output_file"

  echo "  Created $output_file"
done

echo "Done! Extracted ${#THEMES[@]} themes"
