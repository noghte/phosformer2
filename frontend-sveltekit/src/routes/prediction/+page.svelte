<script>
  import { createEventDispatcher, onMount } from "svelte";
  // import { PUBLIC_FLASK_SERVER_ADDRESS } from "$env/static/public";
  // import TreeView from "svelte-tree-view";
  import kinaseData from "$lib/kinase_data.json";

  import Fa from "svelte-fa/src/fa.svelte";
  import { faTrash } from "@fortawesome/free-solid-svg-icons";

  const dispatch = createEventDispatcher();
  const MAX_MERS = 200;
  let currentSeq = "";
  let predResponse = null;
  let SubstrateOpen = true;
  let substrates = []; //"PSVEPPLSQETFSDL"
  let substrateErrors = new Array(substrates.length).fill("");
  // let selectedSubstrates = [];
  let kinaseOpen = true;
  const aminoAcids = [
    "L",
    "A",
    "G",
    "V",
    "S",
    "E",
    "R",
    "T",
    "I",
    "D",
    "P",
    "K",
    "Q",
    "N",
    "F",
    "Y",
    "M",
    "H",
    "W",
    "C",
    "X",
    "B",
    "U",
    "Z",
    "O",
  ];
  let kinase =
    "HLEDIATERATRHRYNAVTGEWLDDEVLIKMASQPFGRGAMRECFRTKKLSNFLHAQQWKGASNYVAKRYIEPVDRDVYFEDVRLQMEAKLWGEEYNRHKPPKQVDIMQMCIIELKDRPGKPLFHLEHYIEGKYIKYNSNSGFVRDDNIRLTPQAFSHFTFERSGHQLIVVDIQGVGDLYTDPQIHTETGTDFGDGNLGVRGMALFFYSHACNRIC";
  let kinaseError;

  let treeData;
  let processing = false;
  let files;
  function handleFileUpload() {
    if (files && files[0]) {
      substrates = []; // Clear existing substrates
      substrateErrors = []; // Clear existing substrate errors

      const reader = new FileReader();
      reader.onload = (event) => {
        const allLines = event.target.result.split(/\r?\n/); // Split the file into lines
        let currentHeader = null;
        let firstSequenceRead = false; // Flag to indicate the first sequence has been read

        allLines.forEach((line) => {
          if (firstSequenceRead) {
            return; // Skip remaining lines after the first sequence is read
          }

          if (line.startsWith(">")) {
            // FASTA header line
            if (currentHeader === null) {
              currentHeader = line.substring(1); // Save the first header
            } else {
              firstSequenceRead = true; // Set flag when next header is found
              return; // Skip further processing
            }
          } else {
            currentSeq += line; // Append to the current sequence
          }
        });

        if (currentSeq) {
          // Process the first sequence
          extractMers(currentSeq);
        }
      };
      reader.readAsText(files[0]);
    }
  }

  // function extractMers(sequence) {
  //     const aminoAcids = "LAGVSETIDPKQNFRYMHWCXBUZO"; // Allowed amino acids

  //     for (let i = 7; i < sequence.length - 7; i++) {
  //         // Adjust for 15-mer length
  //         const mer = sequence.substring(i - 7, i + 8);
  //         // Check for valid Mers
  //         if (mer.length === 15 && (mer[7] === "T" || mer[7] === "S") && [...mer].every((char) => aminoAcids.includes(char))) {
  //             console.log(mer);
  //             substrates.push(mer); // Add valid mer to substrates
  //             substrateErrors.push(""); // Initialize substrate error
  //         }
  //     }
  // }

  function extractMers(sequence) {
    const aminoAcids = "LAGVSETIDPKQNFRYMHWCXBUZO"; // Allowed amino acids
    let newSubstrates = [];

    for (
      let i = 7;
      i < sequence.length - 7 && newSubstrates.length < MAX_MERS;
      i++
    ) {
      const mer = sequence.substring(i - 7, i + 8);
      if (
        mer.length === 15 &&
        (mer[7] === "T" || mer[7] === "S") &&
        [...mer].every((char) => aminoAcids.includes(char))
      ) {
        // newSubstrates.push(mer);
        newSubstrates.push({
          mer: mer,
          startPos: i - 7,
          endPos: i + 7,
        });
      }
    }

    substrates = newSubstrates; // Reassign to trigger update
    substrateErrors = new Array(substrates.length).fill("");
  }

  // Reactive statement that runs whenever the binding values change
  $: {
    predResponse = null;
    // Kinase validation
    kinaseError = "";

    if (files) {
      handleFileUpload();
      files = null; // Reset the files variable to prevent the reactive statement from re-running
    }
  }
  // function handleSubstrateInput(event) {
  //     Substrate = event.target.value;
  //     dispatch("input", Substrate);
  // }
  function validateSubstrate(index) {
    let substrate = substrates[index];
    if (substrate.length !== 15) {
      substrateErrors[index] = "Substrate should be 15 characters long.";
    } else if (![...substrate].every((char) => aminoAcids.includes(char))) {
      substrateErrors[index] =
        "Substrate should contain only the allowed characters: L, A, G, V, S, E, R, T, I, D, P, K, Q, N, F, Y, M, H, W, C, X, B, U, Z, O.";
    } else if (substrate.charAt(7) !== "T" && substrate.charAt(7) !== "S") {
      substrateErrors[index] = "Substrate should have a T or S in the middle.";
    } else {
      substrateErrors[index] = "";
    }
  }
  function handleSubstrateInput(event, index) {
    // currentSeq = event.target.value;
    // dispatch("input", currentSeq);
    // substrates[index] = event.target.value.toUpperCase();
    // validateSubstrate(index);

    currentSeq = event.target.value.toUpperCase();
    dispatch("input", currentSeq);

    // Clear existing substrates and extract new ones from the current sequence
    substrates = [];
    substrateErrors = [];
    extractMers(currentSeq);
  }
  function addSubstrate() {
    substrates = [...substrates, ""];
    substrateErrors = [...substrateErrors, ""];
    validateSubstrate(substrates.length - 1);
  }
  function handleDeleteClick(index) {
    deleteSubstrate(index);
    dispatch("click");
  }

  function deleteSubstrate(index) {
    substrates = substrates.filter((_, i) => i !== index);
    substrateErrors = substrateErrors.filter((_, i) => i !== index);
  }

  function handleKinaseInput(event) {
    kinase = event.target.value;
    dispatch("input", kinase);
  }

  function abbreviate(str) {
    return str.length > 25 ? str.slice(0, 25) + "..." : str;
  }
  function kinase_status(str) {
    return str.length > 0 ? "" : "No Kinase Selected";
  }

  async function predict() {
    processing = true;
    try {
      // const api_endpoint = "http://172.22.150.196:8010/api/predict";
      const api_endpoint = "https://phosformer.lunovid.com/api/predict";
      // const api_endpoint = "http://localhost:5200/api/predict";

      // Extract only the Mers from the substrates to send to the server
      const mersToSend = substrates.slice(0, MAX_MERS).map((s) => s.mer); // Send only up to the first 30 Mers

      const response = await fetch(api_endpoint, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ kinase, substrates: mersToSend }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonResponse = await response.json();
      // add start and end positions to the prediction response
      predResponse = jsonResponse.map((res, index) => {
        return {
          ...res,
          startPos: substrates[index].startPos,
          endPos: substrates[index].endPos,
        };
      });

      console.log("predResponse", predResponse);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      processing = false;
    }
  }

  function createCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Kinase,Substrate,PredictionScore\n"; // Header

    predResponse.forEach((response) => {
      let row = `${kinase},${response.substrate},${parseFloat(
        response.probability
      ).toFixed(4)}`;
      csvContent += row + "\n"; // Add row with line break
    });

    return encodeURI(csvContent);
  }
  function downloadCSV() {
    const csvData = createCSV();
    const a = document.createElement("a");
    a.href = csvData;
    a.download = "results.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  onMount(async () => {
    // Sort the JSON data by the "gene" key
    kinaseData.sort((a, b) => a.gene.localeCompare(b.gene));
    treeData = kinaseData.reduce((acc, item) => {
      const family = item.family;
      const kinaseDomain = item["kinase domain"];
      if (!acc.has(family)) {
        acc.set(family, []);
      }
      acc.get(family).push(kinaseDomain);
      return acc;
    }, new Map());
    // console.log(treeData);
  });
</script>
<section class="py-8 bg-white flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
<div class="responsive-flex flex-col">
  <div class="flex-child bg-white rounded">
    <div
      class="w-full flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0"
    >
      <div class="text-center sm:text-left">
        <h1 class="text-blue-800 font-bold text-md pt-2">Substrate Sequence</h1>
        <div class="text-gray-500 pl-5">
          <ul>
            <li>Upload a fasta file or paste a sequence.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- container after clicked "EDIT" -->
    {#if SubstrateOpen}
      <div x-show="open" class="p-2 bg-white rounded w-full sm:w-1/2">
        <div class="flex flex-col items-start">
          <input
            type="file"
            id="file"
            accept=".fasta, .fa, .fna, .ffn, .faa, .frn"
            bind:files
            style="display: none;"
          />
          <button
            on:click={() => document.getElementById("file").click()}
            type="button"
            class="bg-blue-800 h-max w-max rounded-lg text-white font-bold hover:bg-blue-900 mb-4"
          >
            <div class="flex items-center justify-center m-[10px]">
              <div class="ml-2">Upload Fasta Sequence</div>
            </div>
          </button>

          <textarea
            rows="10"
            cols="50"
            bind:value={currentSeq}
            on:input={handleSubstrateInput}
            class="bg-gray-100 rounded p-2 border focus:outline-none focus:border-blue-500 w-full"
          />
          {#if substrates.length > 0}
            <div class="flex-child p-2 bg-white rounded">
              <h2 class="text-lg font-semibold mb-2">
                Extracted 15-Mers (limit: {MAX_MERS})
              </h2>
              <table class="min-w-full bg-white">
                <thead>
                  <tr>
                    <th class="py-2 px-4 bg-blue-200 border">Start Position</th>
                    <th class="py-2 px-4 bg-blue-200 border">15-Mer Sequence</th
                    >
                    <th class="py-2 px-4 bg-blue-200 border">End Position</th>
                  </tr>
                </thead>
                <tbody>
                  {#each substrates as substrate, index (`${substrate.mer}-${index}`)}
                    <tr key={index}>
                      <td class="py-2 px-4 border">{substrate.startPos}</td>
                      <td class="py-2 px-4 border">{substrate.mer}</td>
                      <td class="py-2 px-4 border">{substrate.endPos}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

<!-- <div class="flex justify-center items-center space-x-2">
    <button
        type="button"
        on:click={() =>
            SubstrateError === ""
                ? (SubstrateOpen = false)
                : (SubstrateOpen = true)}
        class="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium rounded"
    >
        Save
    </button>
</div> -->

<div class="flex">
  <div class="bg-white rounded w-1/2">
    <div class="text-center sm:text-left">
      <h1 class="text-blue-800 font-bold text-md pt-2">
        Kinase Sequences
      </h1>
      <!-- <div class="text-gray-500 pl-5">
        <ul>
          <li>Select a kinase from the list or paste a sequence.</li>
        </ul>
      </div> -->
    </div>
    <!-- {#if !kinaseOpen}
      <div class="flex justify-between items-center">
        <div class="ml-2">{kinase_status(kinase)}</div>
        <button
          type="button"
          class="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"
          on:click={() => (kinaseOpen = !kinaseOpen)}
        >
          Select Kinase
        </button>
      </div>
    {/if} -->

    <!-- container after clicked "EDIT" -->
    {#if kinaseOpen}
      <div x-show="open" class="flex justify-between items-center">
  
        <div class="flex items-center">
          <!-- <TreeView
                    data={treeData}
                /> -->
          
          <div class="flex items-center">
            <div class="flex flex-col">
              <span class="text-gray-700">Select a kinase from the list or paste a sequence.</span>
          
            <select
              bind:value={kinase}
              class="w-1/3 mb-2 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 focus:border-blue-900 focus:outline-none p-[10px]"
            >
              {#each kinaseData as item}
                <option value={item.kinase_domain}
                  >{item.gene} - {item.uniprot}</option
                >
              {/each}
            </select>

            <textarea
              type="text"
              rows="10"
              cols="50"
              bind:value={kinase}
              on:input|preventDefault={handleKinaseInput}
              class="flex-grow bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
          <!-- <input
                        type="text"
                        bind:value={kinase}
                        on:input|preventDefault={handleKinaseInput}
                        class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
                    /> -->
          {#if kinaseError !== ""}
            <!-- <div class="ml-2 text-red-500">❌ </div> -->
            <p class="text-sm text-gray-500">
              {kinaseError}
            </p>
          {/if}
        </div>

        <!-- <div class="flex justify-center items-center space-x-2">
          <button
            type="button"
            on:click={() =>
              kinaseError === "" ? (kinaseOpen = false) : (kinaseOpen = true)}
            class="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium rounded"
          >
            Confirm
          </button>
        </div> -->
      </div>
    {/if}
  </div>
</div>

<div class="flex items-center justify-left">
  {#if !processing}
    <button
      on:click={predict}
      type="button"
      class="bg-red-800 h-max w-max rounded-lg text-white font-bold hover:bg-red-900"
    >
      <div class="flex items-center justify-center m-[10px]">
        <!-- <div class="h-5 w-5 border-t-transparent border-solid rounded-none border-white border-1"></div> -->
        <div class="ml-2">Prediction</div>
      </div></button
    >
  {:else}
    <button
      type="button"
      class="bg-red-800 h-max w-max rounded-lg text-white font-bold hover:bg-red-900 hover:cursor-not-allowed duration-[500ms,800ms]"
      disabled
    >
      <div class="flex items-center justify-center m-[10px]">
        <div
          class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"
        />
        <div class="ml-2">Processing...</div>
      </div></button
    >
  {/if}
</div>

<!-- {#if processing}
  <div>Loading...</div>
{/if} -->
{#if predResponse}
  <div class="w-full flex justify-center items-center">
    <div
      class="w-1/2 rounded-lg shadow-sm p-5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"
    >
      <div class="flex flex-col sm:flex-row justify-start items-center gap-4">
        <!-- <div class="bg-blue-200 flex p-2 rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div> -->
        <div class="text-center sm:text-left">
          <!-- <h1 class="text-gray-700 font-bold tracking-wider">Result</h1> -->
          <table class="min-w-full bg-white">
            <thead>
              <tr>
                <th class="py-2 px-4 bg-blue-200 border">Start Position</th>
                <th class="py-2 px-4 bg-blue-200 border">Substrate</th>
                <th class="py-2 px-4 bg-blue-200 border">End Position</th>
                <th class="py-2 px-4 bg-blue-200 border">Prediction Score</th>
                <th class="py-2 px-4 bg-blue-200 border">Result</th>
              </tr>
            </thead>
            <tbody>
              {#each predResponse as response}
              <tr class:bg-green-200={parseFloat(response.probability) >= 0.8}
              class:bg-green-100={parseFloat(response.probability) >= 0.5 && parseFloat(response.probability) < 0.8}
              class:bg-gray-300={parseFloat(response.probability) < 0.3}
              class:bg-gray-200={parseFloat(response.probability) >= 0.3 && parseFloat(response.probability) < 0.5}>
                  <td class="py-2 px-4 border">{response.startPos}</td>
                  <td class="py-2 px-4 border">{response.substrate}</td>
                  <td class="py-2 px-4 border">{response.endPos}</td>
                  <td class="py-2 px-4 border">{parseFloat(response.probability).toFixed(4)}</td>
                  <td class="py-2 px-4 border">{response.result}</td>
                </tr>
              {/each}
            </tbody>
          </table>
          

          <button
            on:click={downloadCSV}
            type="button"
            class="bg-blue-800 h-max w-max rounded-lg text-white hover:bg-blue-900"
          >
            <div class="flex items-center justify-center m-[8px]">
              <!-- <div class="h-5 w-5 border-t-transparent border-solid rounded-none border-white border-1"></div> -->
              <div class="ml-2">Download CSV</div>
            </div></button
          >
        </div>
      </div>
      <!-- <div><button class="bg-blue-500 py-2 px-4 text-white font-bold rounded-md hover:bg-blue-600">Enable</button>
		</div> -->
    </div>
  </div>
{/if}
</section>
<style>
  /* Add custom styles or media queries here */
  @media screen and (min-width: 1024px) {
    .responsive-flex {
      display: flex;
    }
    .flex-child {
      flex: 1; /* Adjust this value as needed */
      /* Ensure there's a margin only on the right side of the first child */
      margin-right: 1rem;
    }
  }

</style>
