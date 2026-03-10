# isWeakMap

## Bschrybig

Bestimmt, öb es gegebnigs `value` e `WeakMap`-Instanz isch.

### Aawändig

Bruuch `isWeakMap`, wänn du en `unknown` Wert akzeptiersch (z. B. us ere öffentliche API, eme Plugin-System, oder ere
dynamische Konfiguration) und vor em Verwände vo `WeakMap`-spezifischem Verhalte muesch verifiziere, dass es es
`WeakMap` isch.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isWeakMap` macht e `instanceof WeakMap`-Prüefig; es isch e Runtime-Guard, wo nume bi echte `WeakMap`-Instanze `true`
> zrugg git.

### Vorteil

- Eifachi Runtime-Prüefig, öb en Wert es `WeakMap` isch.
- Hilft, Missbruuch vo APIs z'verhüete, wo es `WeakMap` bruuched, indem's `true`/`false` zrugg git statt z'werfe.
- Funktioniert mit `unknown`-Iigabe, was es praktisch macht a Modulgränze (z. B. bi Parsing, externe Date, oder
  untypisiertem Code).

## Verwendig

### Syntax

Funktion:

- `isWeakMap(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a isch zur Laufzyyt e WeakMap
}

console.log(isWeakMap(a)); // wahr
console.log(isWeakMap(b)); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isWeakMap(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:25:05 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>