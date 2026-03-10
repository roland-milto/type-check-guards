# arePlainObjects

## Beskrivning

Kontrollerar om alla element i en array är vanliga objekt och returnerar `true` endast om varje element uppfyller
kraven.

### Användningsfall

Validera extern eller otypad data (t.ex. parsad JSON, API-payloads, formulärinlämningar) för att säkerställa att du har
fått en icke-tom array där varje post är ett vanligt objekt innan du itererar och läser egenskaper.

> **Notis för TypeScript-användare:**
>
> Använd `arePlainObjects` för att validera okänd indata innan du behandlar den som `Record<string, unknown>[]` (eller
> en striktare objektform) i TypeScript.

### Fördelar

- Säkerställer att varje element i inmatningsarrayen är ett vanligt objekt och returnerar `true` endast när alla objekt
  matchar.
- Avvisar ogiltiga indata tidigt (icke-arrayer eller tomma arrayer) genom att returnera `false`.
- Behandlar både objektliteral-objekt och `Object.create(null)`-objekt som giltiga vanliga objekt.

## Användning

### Syntax

Funktion:

- `arePlainObjects(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för vanliga objekt-element.

### Lokal funktionsimport

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // sant
const b = arePlainObjects([{}, Object.create(null)]); // sant
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // falskt
const d = arePlainObjects([] as unknown[]); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.arePlainObjects(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Filen skapades 30 January 2026 at 16:55:59 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>