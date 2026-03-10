# areFalse

## Beskrivning

`areFalse` kontrollerar om alla element i en given array är strikt den booleska `false`.

### Användningsfall

Validera att en lista med funktionsflaggor, kontroller eller guard-resultat alla är `false` innan du går vidare (t.ex.
bekräfta att inga blockerande villkor finns).

> **Notis för TypeScript-användare:**
>
> Använd `areFalse` när du behöver en strikt validering att en array inte är tom och endast innehåller det booleska
> värdet `false`.

### Fördelar

- Säkerställer att varje element är strikt `false` (ingen truthy/falsey-omvandling).
- Returnerar `false` för icke-arrayer eller tomma arrayer genom att kräva en ifylld array via `isFilledArray`.
- Avslutar tidigt vid första elementet som inte är `false` för effektivitet.

## Användning

### Syntax

Funktion:

- `areFalse(array)`

Parametrar:

- `array`: Arrayen som ska kontrolleras, med element av valfri typ.

### Lokal funktionsimport

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // sant
const b = areFalse([false, true, false]);  // falskt
const c = areFalse([false, "false", false]); // falskt
const d = areFalse([]); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.areFalse(array)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Filen skapades 31 January 2026 at 16:18:45 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>