<script lang="ts">
	export let data;
	export let { figures } = data;
</script>

<svelte:head>
	<title>FigTrack</title>
	<meta name="description" content="FigTrack" />
</svelte:head>
<div>
	<h1>Figures</h1>
	<ul>
		{#each figures as figure}
			<li>
				<h3>{figure.name}</h3>
				<p>{figure.price}</p>
			</li>
		{/each}
	</ul>
</div>
