import re
import json

input_file = './tools/genesNfamily_new.js'
output_file = './tools/genesNfamily_updated.json'

# Read the input file
with open(input_file, 'r') as file:
    content = file.read()

# Extract the genesNfamily array using regex
genesNfamily_match = re.search(r'\[.*?\]', content, re.DOTALL)
if genesNfamily_match:
    genesNfamily_str = genesNfamily_match.group(0)
else:
    print('Error: genesNfamily array not found in the input file.')
    exit()

# Replace single quotes with double quotes for valid JSON syntax
genesNfamily_str = genesNfamily_str.replace("'", '"')

# Parse the genesNfamily array as JSON
genesNfamily = json.loads(genesNfamily_str)

# Update the "genes" property to store values as lists of strings
for entry in genesNfamily:
    genes_str = entry['genes']
    genes_list = [gene.strip() for gene in genes_str.split(',')]
    entry['genes'] = genes_list

# Convert the updated genesNfamily list to a JSON string
genesNfamily_str_updated = json.dumps(genesNfamily)

# Write the updated content to the output file
with open(output_file, 'w') as file:
    file.write(genesNfamily_str_updated)

print(f'Updated file created: {output_file}')
