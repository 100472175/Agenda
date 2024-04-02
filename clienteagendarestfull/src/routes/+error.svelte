<script>
  import { page } from "$app/stores";
</script>

<h1 class="underline text-center text-3xl bg-red-500 font-semibold">
  {$page.status} -> {$page.error.message.toUpperCase()}
</h1>
<h3 class=" text-justify text-xl">
  La página no está disponible, seguramente porque no hayas lanzado el backend,
  por favor, comprueba que está lanzado en el puerto 13300.
</h3>
