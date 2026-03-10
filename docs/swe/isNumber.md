# isNumber

## Beskrivning

`isNumber` kontrollerar om ett värde är ett ändligt tal som inte är `NaN`.

### Användningsfall

Validera numerisk indata från opålitliga källor (formulär, query-parametrar, JSON-payloads) före beräkningar, lagring
eller intervallkontroller, så att endast ändliga tal godkänns (`true`) och allt annat returnerar `false`.

> **Notis för TypeScript-användare:**
>
> Använd `isNumber` för att validera `unknown`-värden innan du gör aritmetik; den avvisar `NaN`, `Infinity` och
`-Infinity`.

### Fördelar

- Returnerar `true` endast för riktiga JavaScript-tal (typkontroll plus avvisning av `NaN` och oändlighet).
- Förhindrar vanliga valideringsbuggar där `NaN`, `Infinity` eller `-Infinity` av misstag godkänns som tal.
- Fungerar bra som en runtime-guard för okänd indata (t.ex. JSON, användarinmatning, externa API:er).
- Enkel, snabb och fri från sidoeffekter.

## Användning

### Syntax

Funktion:

- `isNumber(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras.

### Lokal funktionsimport

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input är ett giltigt ändligt tal
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isNumber(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Filen skapades 30 January 2026 at 13:11:09 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>