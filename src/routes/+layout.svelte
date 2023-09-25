<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div
	class="flex flex-col justify-center w-full h-screen gap-4 px-5 py-4 bg-gray-50 dark:bg-gray-900 text-slate-100"
>
	<Header />

	<main>
		<slot />
	</main>
</div>
