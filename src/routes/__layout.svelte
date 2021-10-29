<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	.heading1 {
		@apply text-4xl font-serif;
	}
	.btn {
		@apply font-bold p-4 rounded bg-red-500;
	}
</style>
