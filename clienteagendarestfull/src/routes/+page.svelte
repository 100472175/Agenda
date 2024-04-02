<script>
  import {
    addContact,
    saveContact,
    deleteContact,
    loadContacts,
  } from "$lib/api.js";
  import {
    Input,
    Label,
    Helper,
    Button,
    ButtonGroup,
    GradientButton,
    Checkbox,
    A,
    Modal,
  } from "flowbite-svelte";

  import {
    TrashBinOutline,
    UserEditOutline,
    ExclamationCircleOutline,
  } from "flowbite-svelte-icons";

  let defaultModal = false;
  let popupModal = false;
  let changing_id = -1;
  let deleting_id = -1;
  let contact_temp = {};
  let contact_name = "";
  let contact_phone = "";
  let contact_description = "";

  export let data;
  data = data.props;
  let contacts = data.contactos;

  String.prototype.isNumber = function () {
    return /^\d+$/.test(this);
  };

  function generateCardToAdd() {
    addContactLocal({
      name: document.getElementById("card-name").value,
      phone: document.getElementById("card-phone").value,
      description: document.getElementById("card-description").value,
      id: contacts.length + 1,
    });
  }

  function addContactLocal(card) {
    let name = card.name;
    let phone = card.phone;
    let description = card.description;
    let id = card.id;

    // Check no empty fields:
    if (
      name.trim() === "" ||
      phone.trim() === "" ||
      description.trim() === ""
    ) {
      alert("Please fill all fields");
      return;
    }
    if (phone.isNumber() === false || phone.length !== 9) {
      alert("Phone must be a valid spanish phone number");
      document.getElementById("card-phone").focus();
      return;
    }
    if (description.length > 50) {
      alert("Description must be less than 50 characters");
      document.getElementById("card-description").focus();
      return;
    }

    addContact(card);
    contacts = [...contacts, card];
    document.getElementById("card-name").value = "";
    document.getElementById("card-phone").value = "";
    document.getElementById("card-description").value = "";
  }

  function handleKeyDownSend(event) {
    if (event.key === "Enter") {
      generateCardToAdd();
    }
  }

  function openEditModal(id) {
    defaultModal = true;
    changing_id = id;
    contact_temp = contacts.find((contact) => contact.id === id);
  }

  function editContactLocal(card) {
    saveContact(card);
    contacts = contacts.map((contact) =>
      contact.id === card.id ? card : contact
    );
  }

  function openDeleteModel(id) {
    popupModal = true;
    deleting_id = id;
    contact_temp = contacts.find((contact) => contact.id === id);
  }

  function removeContactLocal(id) {
    //deleteContact(id);
    console.log("Removing contact with id: " + id);
    contacts = contacts.filter((contact) => contact.id !== id);
    popupModal = false;
    deleteContact(id);
    location.reload();
  }

  $: sum = contacts.reduce((total, contact) => total + contact.id, 0);
</script>

<h1
  class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-5xl text-center underline font-extrabold mr-2"
>
  Lista de Contactos
</h1>

<div class="justify-center items-center top-12">
  {#if contacts.length === 0}
    <p class="text-center border-gray-900 pb-4 mb-4 text-xl">
      No contacts found
    </p>
  {/if}
  {#each contacts as contacts, index}
    <div class="text-center border-gray-900 pb-4 mb-4">
      <!-- Added mb-4 for vertical spacing -->
      <h2 class="font-bold text-lg">{contacts.id} - {contacts.name}</h2>
      <p>{contacts.phone}</p>
      <p>{contacts.description}</p>

      <ButtonGroup class=" space-x-px">
        <GradientButton
          pill
          color="purpleToBlue"
          on:click={() => openEditModal(contacts.id)}
        >
          <UserEditOutline class="w-5 h-5 me-2" />
          Edit
        </GradientButton>

        <Modal title="Editar el perfil" bind:open={defaultModal} autoclose>
          <p>
            Estamos modificando el contacto de {contact_temp.name}, con id: {contact_temp.id}
          </p>
          <Label for="name" class="mb-2">Name</Label>
          <Input
            type="name"
            id="name"
            placeholder="Name"
            required
            bind:value={contact_temp.name}
          />

          <Label for="phone" class="mb-2">Phone number</Label>
          <Input
            type="phone"
            id="phone"
            placeholder="6*********"
            required
            bind:value={contact_temp.phone}
          />

          <Label for="description" class="mb-2">Description</Label>
          <Input
            type="description"
            id="description"
            placeholder="Description"
            required
            bind:value={contact_temp.description}
          />

          <svelte:fragment slot="footer">
            <ButtonGroup class="space-x-px">
              <Button on:click={() => editContactLocal(contact_temp)}>
                Confirmar
              </Button>
              <Button color="red">Cancelar</Button>
            </ButtonGroup>
          </svelte:fragment>
        </Modal>

        <GradientButton
          pill
          color="purpleToBlue"
          on:click={() => openDeleteModel(contacts.id)}
        >
          <TrashBinOutline class="w-5 h-5 me-2" />Delete</GradientButton
        >
        <Modal title="Borrar perfil" bind:open={popupModal} autoclose>
          <div class="text-center">
            <ExclamationCircleOutline
              class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            />
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Estás seguro de querer eliminar el contacto de {contact_temp.name}?
            </h3>
            <ButtonGroup class=" space-x-0">
              <Button
                on:click={() => removeContactLocal(contact_temp.id)}
                color="red"
                class=""
              >
                Si, bórralo
              </Button>
              <Button color="alternative">No, calcela</Button>
            </ButtonGroup>
          </div>
        </Modal>
      </ButtonGroup>
    </div>

    {#if index !== contacts.length - 1}
      <div class="border-t border-gray-300"></div>
    {/if}
  {/each}
</div>

<div id="add-contact-container" class="grid grid-cols-3 gap-4">
  <input
    id="card-name"
    type="text"
    placeholder="Introducir nombre..."
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    bind:value={contact_name}
  />
  <input
    id="card-phone"
    type="text"
    placeholder="Introducir teléfono..."
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    bind:value={contact_phone}
  />
  <textarea
    id="card-description"
    type="text"
    placeholder="Introducir descripción..."
    on:keydown={handleKeyDownSend}
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    bind:value={contact_description}
  />
  <!-- Second row -->
  <div></div>
  <button
    id="add-contact-button"
    on:click={() => generateCardToAdd()}
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:font-bold"
    >+</button
  >
</div>

<style lang="postcss">
  h1 {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  #add-contact-container {
    margin-top: 20px;
  }
  :global(html) {
    background-color: theme("colors.blue.100");
    padding: 2% 5% 7% 5%;
  }

  @media (prefers-color-scheme: dark) {
    :global(html) {
      background-color: theme("colors.blue.100");
      padding: 2% 5% 7% 5%;
    }
  }
</style>
