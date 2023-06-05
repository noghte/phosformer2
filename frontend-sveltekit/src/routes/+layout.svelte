<script>
    import "../app.css";
	import Navbar from './components/Navbar.svelte';

    // import Navbar from "/components/Navbar.svelte";
//     export async function load({ cookies }) {
//     return {
//       sessionid: await cookies.get('sessionid')
//     };
// }
  </script>
    <style lang="postcss">
      :global(html) {
        /* background-color: theme('colors.blue.100');
        direction: rtl; */
        margin: 1rem 1rem 1rem 1rem;
      }
    </style>

<!-- component -->
<div class="min-h-screen">

<Navbar />


<slot />

        <!-- <FooterSmall absolute="true" /> -->
</div>