# isFinite

## Beskrivning

Avgör om ett givet `value` är ett ändligt `number`.

### Användningsfall

Använd `isFinite` för att validera okänd indata (t.ex. från JSON, formulär eller API:er) innan du utför numeriska
beräkningar, så att värdet är ett verkligt, ändligt tal.

> **Notis för TypeScript-användare:**
>
> `isFinite` returnerar `true` endast för ändliga tal; den returnerar `false` för `NaN`, `Infinity` och alla värden som
> inte är tal.

### Fördelar

- Använder den inbyggda `Number.isFinite` för en tillförlitlig kontroll av ändlighet.
- Returnerar `true` endast för ändliga tal; returnerar `false` för `NaN`, `Infinity` och indata som inte är tal.
- Enkel, biverkningsfri predikatfunktion som passar för validering och skyddande logik.

## Användning

### Syntax

Funktion:

- `isFinite(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras för ändlighet.

### Lokal funktionsimport

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers är: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value är ett ändligt tal här
  const doubled = value * 2;
  console.log(doubled);
}
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isFinite(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Filen skapades 30 January 2026 at 16:31:47 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>