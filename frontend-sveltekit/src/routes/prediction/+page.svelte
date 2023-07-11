<script>
    import { createEventDispatcher, onMount } from "svelte";
    // import { PUBLIC_FLASK_SERVER_ADDRESS } from "$env/static/public";
    // import TreeView from "svelte-tree-view";
    import kinaseData from "$lib/kinase_data.json";

    import Fa from "svelte-fa/src/fa.svelte";
    import { faTrash } from "@fortawesome/free-solid-svg-icons";

    const dispatch = createEventDispatcher();
    let predResponse = null;
    let SubstrateOpen = false;
    let substrates = ["PSVEPPLSQETFSDL"];
    let substrateErrors = new Array(substrates.length).fill("");
    // let selectedSubstrates = [];
    let kinaseOpen = false;
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
        const reader = new FileReader();
        reader.onload = (event) => {
            const substratesFromFile = event.target.result.split('\n');
            substrates = [...substrates, ...substratesFromFile];
            substrateErrors = new Array(substrates.length).fill("");
            substrates.forEach((_, index) => validateSubstrate(index));
        };
        reader.readAsText(files[0]);
    }
}
    // Reactive statement that runs whenever the binding values change
    $: {
        predResponse = null;
        // Substrate validation
        // Substrate = Substrate.toUpperCase();
        // if (Substrate.length !== 15) {
        //     SubstrateError = "Substrate should be 15 characters long.";
        // } else if (![...Substrate].every((char) => aminoAcids.includes(char))) {
        //     SubstrateError =
        //         "Substrate should contain only the allowed characters: L, A, G, V, S, E, R, T, I, D, P, K, Q, N, F, Y, M, H, W, C, X, B, U, Z, O.";
        // } else if (Substrate.charAt(7) !== "T") {
        //     SubstrateError = "Substrate should have a T or S in the middle.";
        // } else {
        //     SubstrateError = "";
        // }

        // Kinase validation
        kinaseError = "";

        if (files) {
        handleFileUpload();
        files = null;  // Reset the files variable to prevent the reactive statement from re-running
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
            substrateErrors[index] =
                "Substrate should have a T or S in the middle.";
        } else {
            substrateErrors[index] = "";
        }
    }
    function handleSubstrateInput(event, index) {
        substrates[index] = event.target.value.toUpperCase();
        validateSubstrate(index);
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

    async function predict() {
    processing = true;
    try {
        const api_endpoint = "https://phosformer.lunovid.com/api/predict";
        // const api_endpoint = "http://localhost:5200/api/predict";

        const response = await fetch(
            api_endpoint,
            {
                method: "POST",
                mode: 'cors', 
                body: JSON.stringify({ kinase, substrates }),
                headers: {
                    "content-type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        predResponse = await response.json();
        console.log("predResponse", predResponse);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    } finally {
        processing = false;
    }
}


    onMount(async () => {
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

<div class="flex">
    <div class="p-2 bg-white rounded w-1/2">
        <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        <div class="text-center sm:text-left">
            <h1 class="text-blue-800 font-bold text-md pt-2">Substrate Sequence</h1>
              <div class="text-gray-500 pl-5">
                <ul>
                    <li>Click on the Edit button to edit, add, or remove substrates. You can enter substrates manually or upload a text file that has one substrate in each line.</li>
                </ul>
              </div>
        </div>
    </div>
        <!-- <p class="text-blue-800 font-bold text-md pt-2">Substrate Sequence</p> -->

        {#if !SubstrateOpen}
            <div class="flex justify-between items-center">
                <div class="ml-2">{substrates[0]}</div>
                <button
                    type="button"
                    class="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"
                    on:click={() => (SubstrateOpen = !SubstrateOpen)}
                >
                    Edit
                </button>
            </div>
        {/if}

        <!-- container after clicked "EDIT" -->
        {#if SubstrateOpen}
            <div x-show="open" class="flex justify-between items-center">
                <div class="flex flex-col items-start">
                    {#each substrates as substrate, index (index)}
                        <div class="flex items-center mb-2 w-full">
                            <input
                                type="text"
                                bind:value={substrate}
                                on:input|preventDefault={(event) =>
                                    handleSubstrateInput(event, index)}
                                class="flex-grow bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
                            />
                            <!-- <button on:click={() => deleteSubstrate(index)}>Delete</button> -->
                            <div on:click={() => handleDeleteClick(index)} style="cursor: pointer;">
                                <Fa icon={faTrash} />
                            </div>
                            
                            {#if substrateErrors[index]}
                                <p class="text-red-500">
                                    {substrateErrors[index]}
                                </p>
                            {/if}
                        </div>
                    {/each}
                    <div class="flex items-center">
                        <button
                            class="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded mr-2"
                            on:click={addSubstrate}
                            disabled={substrateErrors.some((error) => error)}
                        >
                            Add
                        </button>
                        <input type="file" id="file" bind:files={files} style="display: none;" />
                        <button
                            class="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"
                            on:click={() => document.getElementById('file').click()}
                        >
                            Upload File
                        </button>
                    </div>
                    
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
    <div class="p-2 bg-white rounded w-1/2">
    <div class="text-center sm:text-left">

        <h1 class="text-blue-800 font-bold text-md pt-2">Kinase Sequences</h1>
        <div class="text-gray-500 pl-5">
            <ul>
                <li>Click on the Edit button to select or enter the kinase sequences.</li>
            </ul>
          </div>
</div>
        {#if !kinaseOpen}
            <div class="flex justify-between items-center">
                <div class="ml-2">{abbreviate(kinase)}</div>
                <button
                    type="button"
                    class="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"
                    on:click={() => (kinaseOpen = !kinaseOpen)}
                >
                    Edit
                </button>
            </div>
        {/if}

        <!-- container after clicked "EDIT" -->
        {#if kinaseOpen}
            <div x-show="open" class="flex justify-between items-center">
                <div class="flex items-center">
                    <!-- <TreeView
                    data={treeData}
                /> -->
                    <div class="flex items-center">
                        <select
                            bind:value={kinase}
                            class=" bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
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

                <div class="flex justify-center items-center space-x-2">
                    <button
                        type="button"
                        on:click={() =>
                            kinaseError === ""
                                ? (kinaseOpen = false)
                                : (kinaseOpen = true)}
                        class="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium rounded"
                    >
                        Save
                    </button>
                </div>
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
            class="w-1/2 bg-blue-100 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"
        >
            <div
                class="flex flex-col sm:flex-row justify-start items-center gap-4"
            >
                <div class="bg-blue-200 flex p-2 rounded-md">
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
                </div>
                <div class="text-center sm:text-left">
                    <!-- <h1 class="text-gray-700 font-bold tracking-wider">Result</h1> -->
                    {#each predResponse as response}
                      <div class="text-gray-700 text-lg">
                        <span class="font-normal font-mono">{response.substrate}</span>: with a score of
                        <span class="font-bold">{parseFloat(response.probability).toFixed(4)}</span>,
                        the prediction is
                        <span class="font-bold">{response.result}</span>.
                      </div>
                    {/each}
                </div>
                  
            </div>
            <!-- <div><button class="bg-blue-500 py-2 px-4 text-white font-bold rounded-md hover:bg-blue-600">Enable</button>
		</div> -->
        </div>
    </div>
{/if}
