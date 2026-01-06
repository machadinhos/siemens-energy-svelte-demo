<script lang="ts">
  import { type ModalInstance } from '$lib/state';

  type Params = {
    text: string;
  };

  type Props = {
    modal: ModalInstance<Params>;
  } & Params;

  let { modal, text }: Props = $props();
</script>

<button onclick={modal.close} type="button">test</button>
{text}
