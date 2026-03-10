# areHexadecimals

## Beskrivning

Kontrollerar om alla element i en array är hexadecimala strängar och returnerar `true` endast för icke-tomma arrayer där
varje objekt är giltigt.

### Användningsfall

Använd `areHexadecimals` för att validera användarinmatning eller extern data (t.ex. ID:n, kontrollsummor, färgkoder
utan inledande '#') innan du utför hexadecimal tolkning eller vidare bearbetning.

> **Notis för TypeScript-användare:**
>
> Använd `areHexadecimals` för att validera okänd indata innan du tolkar eller konverterar värden (till exempel före
`parseInt(value, 16)` eller BigInt-konverteringar).

### Fördelar

- Validerar att varje element är en hexadecimal sträng och returnerar `true` endast när alla objekt matchar.
- Avvisar tomma arrayer avsiktligt och returnerar `false` när indata saknas.
- Ger ett enkelt booleskt resultat (`true`/`false`) som passar för guards och validering med tidig retur.

## Användning

### Syntax

Funktion:

- `areHexadecimals(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras för element som är hexadecimala strängar.

### Lokal funktionsimport

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areHexadecimals(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Filen skapades 31 January 2026 at 23:08:01 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>