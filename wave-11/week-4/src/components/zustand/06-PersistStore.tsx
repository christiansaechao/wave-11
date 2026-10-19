import { create } from "zustand";
import { persist } from "zustand/middleware";

/*
Requirements:
- Create a theme store: theme: "light" | "dark", toggleTheme()
- Wrap it with persist(..., { name: "theme-practice" })
- Add a toggle button and switch the page background with the theme
- Refresh - the theme should stay
- Open DevTools > Application > Local Storage and find your saved data
*/

export default function PersistStore() {
  return <div>{/* CODE HERE */}</div>;
}
