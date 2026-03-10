# areOctals

## Beskrivning

`areOctals` avgör om det angivna värdet är en icke-tom array av giltiga oktala strängar.

### Användningsfall

Använd `areOctals` vid validering av användarindata, konfigurationsvärden eller API-payloads som måste innehålla oktala
litteraler (t.ex. filbehörighetslägen som `0o755`) och du vill avvisa tomma arrayer eller ogiltiga poster genom att
returnera `false`.

> **Notis för TypeScript-användare:**
>
> Använd `areOctals` för att säkerställa att du har en icke-tom `unknown[]` där varje post är en giltig oktal sträng
> innan du konverterar (t.ex. via `Number(...)` eller egen tolkning).

### Fördelar

- Validerar att ett värde är en icke-tom array där varje element är en oktal sträng, och returnerar `true` endast när
  alla objekt godkänns.
- Misslyckas snabbt: returnerar `false` så snart ett icke-oktalt element hittas.
- Användbart som en guard innan tolkning eller konvertering av oktala strängar för att undvika körningsfel och
  inkonsekvent hantering av indata.

## Användning

### Syntax

Funktion:

- `areOctals(array)`

Parametrar:

- `array`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value är en icke-tom array av oktala strängar
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areOctals(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Filen skapades 30 January 2026 at 14:58:27 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>