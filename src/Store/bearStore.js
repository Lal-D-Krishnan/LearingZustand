import create from 'zustand'

import {devtools, persist} from 'zustand/middleware'

const bearStore = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
})

const useBearStore = create(
    devtools(
        persist(bearStore,{
            name: "bears"
        })
    )
)

export default useBearStore;