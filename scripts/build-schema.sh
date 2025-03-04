#!/bin/bash

set -e
set -o pipefail

echo "Running build-schema script..."

# Use environment variable VERSION, defaulting to "@next" if not set
version="${VERSION:-@next}"

echo "Version set to $version"

dirs=("application" "preApplication" "prototypeApplication" "postSubmissionApplication")
types=("Application" "PreApplication" "PrototypeApplication" "PostSubmissionApplication")

for i in "${!dirs[@]}"; do
  dir=${dirs[$i]}
  type=${types[$i]}

  echo "Building schema for $type from directory /$dir"

  pnpm ts-json-schema-generator --path "types/schemas/${dir}/*.ts" --out "schemas/${dir}.json" --type "$type" --id "$version" --no-top-ref
done
