<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	function removeNumber() {
		numbers = numbers.slice(0, -1);
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);

	import { Button, Modal } from 'flowbite-svelte';
	let clickOutsideModal = false;
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}> Add a number </button>
<button on:click={removeNumber}> Remove a number </button>

{#each numbers as num}
	<p>{num}</p>
{/each}


