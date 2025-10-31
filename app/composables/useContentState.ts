import type { Ref } from 'vue'
import { ref } from 'vue'
import { useState } from '#app'

interface DocumentDrivenState {
  pages: Ref<Record<string, any>>
  navigation: Ref<any[]>
}

export const useContentState = () => {
  const state = useState<DocumentDrivenState>('content-state', () => ({
    pages: ref<Record<string, any>>({}),
    navigation: ref<any[]>([])
  }))

  return state.value
}
