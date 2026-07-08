/**
 * Next.js instrumentation hook — runs once when the server process boots,
 * before any request is handled.
 *
 * Node >= 25 exposes a global Web Storage `localStorage`. When it isn't backed
 * by a real store (no `--localstorage-file`), it's a non-functional stub whose
 * methods are `undefined`. Server-side libraries (e.g. Sanity's `get-it`/`debug`)
 * feature-detect `typeof localStorage !== "undefined"` and then call
 * `localStorage.getItem(...)`, which throws "localStorage.getItem is not a function"
 * during SSR and breaks the page with a 500.
 *
 * Removing the broken stub makes those `typeof localStorage` guards short-circuit,
 * exactly as they do on Node 18/20/22. This is a no-op on Node versions that don't
 * expose the stub, and on the Edge runtime.
 */
export function register() {
  if (
    typeof localStorage !== "undefined" &&
    typeof localStorage.getItem !== "function"
  ) {
    Object.defineProperty(globalThis, "localStorage", {
      value: undefined,
      configurable: true,
    });
  }
}
