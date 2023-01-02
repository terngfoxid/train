import type { Component } from 'solid-js';
import { Fireworks, FireworksHandlers } from '@fireworks-js/solid'
import { createSignal, Show } from 'solid-js'

const Firework: Component = () => {
  const [enabled, setEnabled] = createSignal(true)
  let fireworks: FireworksHandlers

  setTimeout(() => console.log(fireworks))

  const toggleFireworks = () => {
    if (fireworks.isRunning) {
      fireworks.waitStop()
    } else {
      fireworks.start()
    }
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          position: 'absolute',
          'z-index': 1
        }}
      >
        <button onClick={() => setEnabled(!enabled()) } class="fixed bottom-2 left-2 rounded bg-zinc-700 hover:bg-zinc-500 text-zinc-400">
          {enabled() ? 'Enabled' : 'Disabled'}
        </button>
        <button onClick={() => toggleFireworks()} class="fixed bottom-2 left-22 rounded bg-zinc-700 hover:bg-zinc-500 text-zinc-400">Toggle</button>
      </div>
      <Show when={enabled()}>
        <Fireworks
          ref={(ref) => (fireworks = ref)}
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: '#000'
          }}
        />
      </Show>
    </>
  )
}

export default Firework;