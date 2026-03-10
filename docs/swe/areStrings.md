# areStrings

## Beskrivning

`areStrings` kontrollerar om en array är icke-tom och att alla dess element är strängar, och returnerar `true` endast i
det fallet.

### Användningsfall

Validera extern eller användarlevererad data (t.ex. query params, JSON-payloads, CSV-fält) för att säkerställa att du
har en icke-tom lista med strängar innan bearbetning.

> **Notis för TypeScript-användare:**
>
> Använd `areStrings` för att validera okända arrayer innan du tillämpar strängspecifik logik; den returnerar `false`
> för tomma arrayer.

### Fördelar

- Säkerställer att varje element är en sträng och avvisar arrayer med blandade typer genom att returnera `false`.
- Avvisar tomma arrayer, så `true` indikerar endast en icke-tom lista med strängar.
- Användbar som en snabb runtime-kontroll innan du utför strängspecifika operationer (t.ex. `trim`, `toLowerCase`).

## Användning

### Syntax

Funktion:

- `areStrings(value)`

Parametrar:

- `value`: Expected type `string[]`.

### Lokal funktionsimport

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input är en icke-tom string[] vid körning
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areStrings(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:20:34 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>