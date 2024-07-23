#!/bin/bash

echo "Running build-schema script..."

# Use environment variable VERSION, defaulting to "@next" if not set
version="${VERSION:-@next}"

echo "Version set to $version"

dirs=("application" "discriminated")
types=("Application" "App")

for i in "${!dirs[@]}"; do
  dir=${dirs[$i]}
  type=${types[$i]}

  echo "Building schema for $type from directory /$dir"

  pnpm ts-json-schema-generator --path "types/schemas/${dir}/*.ts" --out "schemas/${dir}.json" --type "$type" --id "$version" --no-top-ref
done
