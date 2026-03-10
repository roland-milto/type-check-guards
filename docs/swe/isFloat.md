# isFloat

## Beskrivning

`isFloat` avgör om ett givet `value` är ett ändligt flyttal (ett `number` som inte är ett heltal).

### Användningsfall

Validera numerisk indata som användaren anger där bråkvärden krävs (t.ex. priser, mätningar, satser) och avvisa heltal,
`NaN` och oändligheter.

> **Notis för TypeScript-användare:**
>
> Använd `isFloat` när du behöver acceptera endast ändliga, icke-heltaliga numeriska indata; den avvisar heltal och
> icke-ändliga tal.

### Fördelar

- Returnerar `true` endast för ändliga, icke-heltal (utesluter heltal, `NaN`, `Infinity` och `-Infinity`).
- Fungerar med alla indatatyper (`unknown`) och snävar säkert in genom att kontrollera `typeof value === "number"`.
- Använder inbyggda numeriska skydd (`Number.isInteger`, `Number.isFinite`) för förutsägbart beteende.

## Användning

### Syntax

Funktion:

- `isFloat(value)`

Parametrar:

- `value`: Värdet som ska kontrolleras om det är ett flyttal.

### Lokal funktionsimport

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // värdet är ett tal vid körning; det är ändligt och inte ett heltal
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isFloat(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Filen skapades 30 January 2026 at 16:09:58 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>