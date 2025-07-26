"use client";

import App from "./App"; // ✅ Correct import since App.tsx is in same folder

export default function Page() {
  return <App />; // ✅ This makes sure your App.tsx is rendered
}
