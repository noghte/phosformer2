<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { PUBLIC_FLASK_SERVER_ADDRESS } from "$env/static/public";
    import TreeView from "svelte-tree-view";
    import kinaseData from "$lib/kinase_data.json";

    const dispatch = createEventDispatcher();

    // let a = 0.8;
    // let b = 0.15;
    let predResponse = null;
    let subtradeOpen = false;
    let subtrade = "ABCDEFGTABCDEFG";
    let subtradeError;
    let selectedSubtrades = [];
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

    // Reactive statement that runs whenever the binding values change
    $: {
        predResponse = null;
        // Subtrade validation
        subtrade = subtrade.toUpperCase();
        if (subtrade.length !== 15) {
            subtradeError = "Subtrade should be 15 characters long.";
        } else if (
            ![...subtrade].every((char) => aminoAcids.includes(char))
        ) {
            subtradeError =
                "Subtrade should contain only the allowed characters: L, A, G, V, S, E, R, T, I, D, P, K, Q, N, F, Y, M, H, W, C, X, B, U, Z, O.";
        } else if (subtrade.charAt(7) !== "T") {
            subtradeError = "Subtrade should have a T in the middle.";
        } else {
            subtradeError = "";
        }

        // Kinase validation
        kinaseError = "";
    }
    // function handleSubtradeInput(event) {
    //     subtrade = event.target.value;
    //     dispatch("input", subtrade);
    // }
    function handleSubtradeInput(event) {
        selectedSubtrades = Array.from(event.target.selectedOptions).map(
            (option) => option.value
        );
        dispatch("input", selectedSubtrades);
    }

    function handleKinaseInput(event) {
        kinase = event.target.value;
        dispatch("input", kinase);
    }
    function abbrevate(str) {
        if (str.length > 25) {
            return str.slice(0, 25) + "...";
        } else {
            return str;
        }
    }

    async function predict() {
        processing = true;
        const response = await fetch(
            `${PUBLIC_FLASK_SERVER_ADDRESS}/api/predict`,
            {
                method: "POST",
                body: JSON.stringify({ kinase, subtrade }),
                headers: {
                    "content-type": "application/json",
                },
            }
        );

        predResponse = await response.json();
        processing = false;
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
        <p class="text-blue-800 font-bold text-md">Subtrade</p>

        {#if !subtradeOpen}
            <div class="flex justify-between items-center">
                <div class="ml-2">{subtrade}</div>
                <button
                    type="button"
                    class="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"
                    on:click={() => (subtradeOpen = !subtradeOpen)}
                >
                    Edit
                </button>
            </div>
        {/if}

        <!-- container after clicked "EDIT" -->
        {#if subtradeOpen}
            <div x-show="open" class="flex justify-between items-center">
                <div class="flex items-center">
                    <!-- <select
                        bind:value={subtrade}
                        on:change|preventDefault={handleSubtradeInput}
                        class=" bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
                    > -->
                    <select
                        multiple
                        bind:value={selectedSubtrades}
                        class="bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
                    >
                        {#each aminoAcids as item}
                            <option value={item.value}>{item.name}</option>
                        {/each}
                    </select>

                    <!-- {#each aminoAcids as item}
                            <option value={item.value}
                                >{item.name}</option
                            >
                        {/each}
                    </select> -->

                    <input
                        type="text"
                        bind:value={subtrade}
                        on:input|preventDefault={handleSubtradeInput}
                        class="flex-grow bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
                    />

                    {#if subtradeError !== ""}
                        <!-- <div class="ml-2 text-red-500">❌ </div> -->
                        <p class="text-sm text-gray-500">
                            {subtradeError}
                        </p>
                    {/if}
                </div>

                <div class="flex justify-center items-center space-x-2">
                    <button
                        type="button"
                        on:click={() =>
                            subtradeError === ""
                                ? (subtradeOpen = false)
                                : (subtradeOpen = true)}
                        class="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        {/if}
    </div>
</div>

<div class="flex">
    <div class="p-2 bg-white rounded w-1/2">
        <p class="text-blue-800 font-bold text-md">Kinase</p>

        {#if !kinaseOpen}
            <div class="flex justify-between items-center">
                <div class="ml-2">{abbrevate(kinase)}</div>
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
                    <p class="text-gray-700 text-lg">
                        With a confidence of
                        <span class="font-bold"
                            >{parseFloat(predResponse.confidence).toFixed(
                                4
                            )}</span
                        >, the prediction is
                        <span class="font-bold">{predResponse.result}</span>.
                    </p>
                </div>
            </div>
            <!-- <div><button class="bg-blue-500 py-2 px-4 text-white font-bold rounded-md hover:bg-blue-600">Enable</button>
		</div> -->
        </div>
    </div>
{/if}
