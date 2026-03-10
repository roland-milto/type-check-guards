# isInteger

## Beskrivning

Avgör om ett givet `value` är ett säkert heltal.

### Användningsfall

Validera opålitlig indata (t.ex. query params, JSON-payloads, miljövariabler) innan du använder den som ett heltal för
arrayindex, paginering, räknare eller databas-ID:n.

> **Notis för TypeScript-användare:**
>
> Använd `isInteger` för att validera okänd indata innan du behandlar den som ett numeriskt heltal; den returnerar
`true` endast för värden där `typeof value === "number"` och `Number.isSafeInteger(value)`.

### Fördelar

- Kontrollerar både typ- och numerisk säkerhet: returnerar `true` endast när indata är ett tal och ett säkert heltal.
- Förhindrar vanliga fallgropar med numerisk typomvandling: strängar som "5" returnerar korrekt `false`.
- Avvisar icke-heltal och osäkra heltal, vilket gör den lämplig för ID:n, räknare och arrayindexering.

## Användning

### Syntax

Funktion:

- `isInteger(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för heltalsstatus.

### Lokal funktionsimport

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // sant
const b = isInteger(-100);   // sant
const c = isInteger("5");    // falskt
const d = isInteger(5.5);    // falskt
const e = isInteger(null);   // falskt

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isInteger(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Filen skapades 31 January 2026 at 00:51:35 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>