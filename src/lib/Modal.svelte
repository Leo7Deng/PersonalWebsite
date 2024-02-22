<script lang="ts">
    export let isOpen = false;
    export let onClose: () => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if isOpen}
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="modal-overlay" on:click={onClose} tabindex="0">
    <div class="modal-window" on:click|stopPropagation>
        <button class="close-btn" on:click={onClose} type="button">
            ×
        </button>
        <slot></slot>
    </div>
</div>
{/if}

<style lang="scss">
    @import 'normalize.css';
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      cursor: default;
    }
    .modal-window {
      position: relative;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      width: 800px; 
      height: 800px; 
      max-width: 90%; 
      max-height: 90vh; 
      overflow-y: auto;
      box-sizing: border-box; 
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: none;
      font-size: 24px;
      cursor: pointer;
    }
</style>
