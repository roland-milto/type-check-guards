# areNaNs

## Beskrivning

`areNaNs` kontrollerar om alla element i en array är `NaN` och returnerar `true` endast om varje element är `NaN`.

### Användningsfall

Validera inkommande data där `NaN` används som ett sentinelvärde och du måste säkerställa att hela arrayen uteslutande
består av `NaN` (t.ex. för att upptäcka en helt saknad numerisk serie).

> **Notis för TypeScript-användare:**
>
> Använd `areNaNs` när du behöver validera att en array endast innehåller det numeriska värdet `NaN` (utan
> tvångskonvertering från sträng till tal).

### Fördelar

- Returnerar `true` endast när varje element är `NaN` (strikt kontroll av alla element).
- Tvingar inte strängar till tal; värden som "NaN" förblir icke-`NaN` och gör resultatet `false`.
- Returnerar `false` för icke-ifyllda arrayer, vilket förhindrar oavsiktligt `true` vid tom indata.

## Användning

### Syntax

Funktion:

- `areNaNs(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för `NaN`-värden.

### Lokal funktionsimport

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // sant
const b = areNaNs([NaN, 1, NaN]); // falskt
const c = areNaNs([NaN, "NaN", NaN]); // falskt
const d = areNaNs([NaN, null, NaN]); // falskt
const e = areNaNs([] as unknown[]); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areNaNs(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Filen skapades 30 January 2026 at 15:53:38 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>