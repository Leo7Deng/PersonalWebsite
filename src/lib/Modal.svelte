<script lang="ts">
    export let isOpen = false;
    export let content = '';
    export let onClose: () => void; // Correctly type the onClose function

    // Function to handle keyboard events on the close button
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            onClose();
        }
    }
</script>

{#if isOpen}
<div class="modal-overlay" on:click={onClose} tabindex="0">
    <div class="modal-window" on:click|stopPropagation>
        <button class="close-btn" on:click={onClose} on:keydown={handleKeydown} type="button">
            ×
        </button>
        {@html content}
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
      width: 800px; /* Fixed width */
      height: 800px; /* Fixed height */
      max-width: 90%; /* Ensures responsiveness */
      max-height: 90vh; /* Ensures the modal fits within the viewport height */
      overflow-y: auto;
      box-sizing: border-box; /* Includes padding in the height calculation */
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
