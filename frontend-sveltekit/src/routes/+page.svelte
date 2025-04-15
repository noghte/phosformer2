<script>
	import { base } from '$app/paths';
	// import { onMount } from 'svelte';
	// import Prediction from './components/Prediction.svelte';
	const description =
		"Phosformer-ST: explainable machine learning uncovers the kinase-substrate interaction landscape";
	const title = "Phosformer-ST Predictions";

	const uniprotId = 10;
	let items = [];
	// onMount(async () => {
	// 	const url = `?uid=${uniprotId}`;
	// 	console.log(url);
	// 	try {
	// 		const response = await fetch(url);
	// 		items = await response.json();
	// 		// handle data
	// 	} catch (error) {
	// 		console.error(error);
	// 		// handle error
	// 	}
	// });
</script>

<svelte:head>
	<meta name="description" content={description} />
	<title>{title}</title>
</svelte:head>

<!-- <main class="w-[95%] max-w-2xl mx-auto mt-48">
	<h1 class="text-xl font-bold">
		{uniprotId}
	</h1>
	<hr />


	<Prediction {items} />
</main> -->

<!-- component -->
<section class="py-10 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<!-- <div class="relative">
            <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl"> Level Up Your Designs</h2>
            <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Add some nice touches to your interface with our latest designs, components, and templates. We've crafted a beautiful user experience that your visitors will love. </p>
        </div> -->
		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<div
				class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last"
			><a href="/figure1.png">
				<img
					class="rounded-lg shadow-xl"
					src="{base}/phosformer-st.png"
					alt="Phosformer-st architecture snapshot"
				/>
			</a>
			</div>
			<div
				class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16"
			>
				<!-- <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Drag-n-drop design</p> -->
				<h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
					Phosformer-ST
				</h3>
				<h2 class="mt-1 text-xl sm:text-left md:text-xl">
					Explainable kinase-substrate interaction predictions
				</h2>
				<p class="mt-5 text-lg text-gray-700 text md:text-left">
					Phosphorylation, a post-translational modification regulated
					by protein kinase enzymes, plays an essential role in almost
					all cellular processes. Understanding how each of the nearly
					500 protein kinases encoded in the human genome selectively
					phosphorylates their substrates is a foundational challenge
					in bioinformatics and cell signaling. Although deep learning
					models have been a popular means to predict new
					kinase-substrate relationships, existing models often lack
					interpretability, making it challenging to evaluate model
					performance and generate informed hypotheses for
					experimental studies. Here, we provide a web interface for
					predicting kinase substrate associations for user-defined
					sequences and a resource for visualizing the learned
					kinase-substrate associations.
					<!-- <br />
				Benchmarks indicate that Phosformer exhibits significant improvements compared to the state-of-the-art models, while also presenting a more generalized, unified, and interpretable predictive framework. -->
				</p>
			</div>
		</div>

		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<!-- <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16"> -->
			<!-- <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Paper</p> -->
			<!-- <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Paper</h3> -->
			<!-- <p class="mt-5 text-lg text-gray-700 text md:text-left">
				</p> -->
			<div
				class="p-6 max-w-fit bg-white rounded-xl shadow-md flex items-left float-left space-x-16"
			>
				<div class="flex-shrink-0">
					<!-- <img
						class="h-32 w-22"
						src="/m_bioinfo_39_2cover.jpeg"
						alt="Bioinformatics journal cover"
					/> -->
				</div>
				<div>
					<div class="text-lg font-medium text-black">
						Phosformer-ST: explainable machine learning uncovers the kinase-substrate interaction landscape
					</div>
					Zhongliang Zhou, Wayland Yeung, Saber Soleymani, Nathan Gravel,
					Mariah Salcedo, Sheng Li, & Natarajan Kannan (2023).<br />
					Phosformer-ST: explainable machine learning uncovers the kinase-substrate interaction landscape <br />
					<!-- Bioinformatics, 39(2). -->
					<p class="text-sm font-small text-gray-600">Under Review</p>

					<!-- <p class="text-sm font-small text-gray-600">https://doi.org/10.1093/bioinformatics/btad046</p> -->
				</div>
			</div>
			<!-- </div> -->
		</div>

		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
				<a href="/figure3.png">
				<img
					class="rounded-lg shadow-xl"
					src="{base}/figure3.png"
					alt="Figure 3 of the paper"
				/>
			</a>
				<!-- <p
					class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase"
				>
					Citation
				</p>
				<div class="float-left p-5" style="tab-size: 1;">
					<code>
						<pre class="text-sm text-gray-600 font-mono">
					{`@article{
						zhou_2023, 
						title={Phosformer: an explainable transformer model for protein kinase-specific phosphorylation predictions}, 
						volume={39}, 
						ISSN={1367-4811}, 
						url={https://academic.oup.com/bioinformatics/article/doi/10.1093/bioinformatics/btad046/7000331}, 
						DOI={10.1093/bioinformatics/btad046},  
						number={2}, 
						journal={Bioinformatics}, 
						author={Zhou, Z. and Yeung, W. and Gravel, N. and Salcedo, M. and Soleymani, S. and Li, S. and Kannan, N.}, 
						editor={Martelli, Pier Luigi}, 
						year={2023}, 
						month={Feb}, 
						language={en}
					}
					`}
				</pre>
					</code>
				</div>
			</div> -->
		</div>
	</div>
</section>
