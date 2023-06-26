#!/bin/bash

input_directory="/Users/sabersoleymani/workspace/prokino/phosformer-projects/weblogos_only/latex/resources"
output_directory="/Users/sabersoleymani/workspace/prokino/phosformer-projects/weblogos-png"

# Convert each PDF file to PNG
for pdf_file in "$input_directory"/*.pdf; do
    output_prefix="${pdf_file%.*}"
    output_path="$output_directory/${output_prefix##*/}.png"

    # Convert PDF to PNG using ImageMagick
    convert -density 300 "$pdf_file" -quality 100 "$output_path"
    echo "$output_path"
done

echo "PDF to PNG conversion completed."
