# areUndefined

## Beskrivning

`areUndefined` kontrollerar om varje element i en angiven array är `undefined`.

### Användningsfall

Validera att en lista med valfria resultat inte innehåller några faktiska värden (endast `undefined`), t.ex. efter att
ha mappat uppslag där saknade poster representeras som `undefined`, och du vill bekräfta att alla uppslag misslyckades.

> **Notis för TypeScript-användare:**
>
> Använd `areUndefined` när du behöver fastslå att en `unknown[]` endast innehåller `undefined`-värden; den returnerar
`false` för tomma arrayer och icke-arrayer/ogiltiga indata på grund av den interna `isFilledArray`-kontrollen.

### Fördelar

- Returnerar `false` för icke-arrayer och tomma arrayer genom att kräva en fylld array via `isFilledArray`.
- Säkerställer att varje element är `undefined`, inte bara vissa, vilket gör avsikten tydlig.
- Användbar som ett guard-liknande predikat vid validering av okända inmatningssamlingar.

## Användning

### Syntax

Funktion:

- `areUndefined(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för `undefined`-element.

### Lokal funktionsimport

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // sant
const r2 = areUndefined(b); // falskt
const r3 = areUndefined(c); // falskt

// Obs: returnerar falskt för tomma arrayer
const r4 = areUndefined([]); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areUndefined(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:58:03 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>