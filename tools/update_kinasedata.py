import os
import json

kinase_data_file = './frontend-sveltekit/src/lib/kinase_data.json'
kinase_data_file_new = './frontend-sveltekit/src/lib/kinase_data_new.json'

weblogos_folder = './frontend-sveltekit/src/lib/weblogos'

# Load the kinase data from the JSON file
with open(kinase_data_file, 'r') as file:
    kinase_data = json.load(file)

length = len(kinase_data)
print(f'Loaded {length} kinase data entries.')
# Iterate over each item in the kinase data
total = 0
for item in kinase_data:
    uniprot = item['uniprot']
    logo_filename = [filename for filename in os.listdir(weblogos_folder) if uniprot in filename]
    if logo_filename:
        item['weblogo'] = logo_filename[0]
        total += 1
    else:
        print(f'No weblogo found for {uniprot}.')

print(f'Updated {total} kinase data entries with weblogo filenames.')

# Write the updated kinase data back to the JSON file
with open(kinase_data_file_new, 'w') as file:
    json.dump(kinase_data, file, indent=2)

print('Kinase data file updated successfully.')
