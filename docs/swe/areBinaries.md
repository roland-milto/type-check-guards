# areBinaries

## Beskrivning

Kontrollerar om det angivna värdet är en icke-tom array av giltiga binära strängar och returnerar `true` endast om alla
objekt klarar valideringen.

### Användningsfall

Använd `areBinaries` när du tar emot en okänd lista (t.ex. från JSON, formulär eller API:er) och behöver säkerställa att
det är en icke-tom array av binära strängar innan du tolkar eller bearbetar den.

> **Notis för TypeScript-användare:**
>
> Använd `areBinaries` för att validera okänd indata innan du konverterar binära strängar till tal/BigInts; den
> säkerställer att arrayen är icke-tom och att varje element är en giltig binär sträng.

### Fördelar

- Validerar att ett värde är en icke-tom array där varje element är en giltig binär sträng.
- Returnerar ett enkelt booleskt resultat (`true`/`false`) som passar för guards, tidiga returer och indatavalidering.
- Förhindrar efterföljande tolkningsfel genom att avvisa arrayer som innehåller någon icke-binär post.

## Användning

### Syntax

Funktion:

- `areBinaries(array)`

Parametrar:

- `array`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // sant
console.log(areBinaries(b)); // falskt
console.log(areBinaries([])); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areBinaries(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:16:03 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>