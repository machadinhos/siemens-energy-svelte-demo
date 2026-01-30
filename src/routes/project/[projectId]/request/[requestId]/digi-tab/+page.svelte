<script lang="ts">
  import Editor from '@tinymce/tinymce-svelte';

  let conf = {
    placeholder: 'Enter your content here...',
    height: 500,
    menubar: false,
    elementpath: false,
    statusbar: false,
    // eslint-disable-next-line camelcase
    base_url: '/tinymce',
    plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'searchreplace', 'visualblocks', 'table', 'help'],
    toolbar:
      'undo redo | blocks | ' +
      'bold italic forecolor | alignleft aligncenter ' +
      'alignright alignjustify | link image bullist numlist table outdent indent | ' +
      'removeformat | help',
  };

  let { data } = $props();
</script>

<Editor {conf} licenseKey="gpl" scriptSrc="/tinymce/tinymce.min.js" bind:value={data.tooltip} />
