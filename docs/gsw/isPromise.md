# isPromise

## Bschrybig

Bestimmt, öb e gegebene Wert e `Promise` isch.

### Aawändig

Bruuch `isPromise`, zum unbekannti Inputs z validiere, bevor du si wie e `Promise` behandlisch, z. B. bi Wärt, wo vo
Plugins, dynamische Imports oder locker typisierte APIs zruggchömed.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isPromise` prüeft mit `instanceof Promise`, drum git's nume bi echte `Promise`-Instanze `true` zrugg (nöd bi
> allgemeine Thenables).

### Vorteil

- Bietet e eifachi Runtime-Prüefig, öb e Wert e `Promise` isch.
- Hilft, Code-Pfäd z schütze, wo e richtigi `Promise`-Instanz bruuched, und git voruusgsehbar `true` oder `false` zrugg.
- Verhindert Falsch-Positiv bi „thenable“-Objekt (z. B. `{ then() {} }`), will es e tatsächligi `Promise`-Instanz
  verlangt.

## Verwendig

### Syntax

Funktion:

- `isPromise(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // wohr
console.log(isPromise(b)); // falsch
console.log(isPromise(123)); // falsch
console.log(isPromise(null)); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isPromise(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:52:49 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>