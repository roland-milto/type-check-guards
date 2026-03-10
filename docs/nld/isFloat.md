# isFloat

## Beschrijving

`isFloat` bepaalt of een gegeven `value` een eindig drijvendekommagetal is (een `number` die geen integer is).

### Use case

Valideer door gebruikers opgegeven numerieke invoer waarbij fractionele waarden vereist zijn (bijv. prijzen, metingen,
tarieven) en wijs integers, `NaN` en oneindigheden af.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isFloat` wanneer je alleen eindige, niet-integer numerieke invoer moet accepteren; het wijst integers en
> niet-eindige getallen af.

### Voordelen

- Retourneert `true` alleen voor eindige, niet-integer getallen (sluit integers, `NaN`, `Infinity` en `-Infinity` uit).
- Werkt met elk invoertype (`unknown`) en vernauwt veilig door `typeof value === "number"` te controleren.
- Gebruikt ingebouwde numerieke controles (`Number.isInteger`, `Number.isFinite`) voor voorspelbaar gedrag.

## Gebruik

### Syntax

Functie:

- `isFloat(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden of het een drijvendekommagetal is.

### Lokale functie-import

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // waarde is tijdens runtime een getal; het is eindig en geen geheel getal
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isFloat(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 16:08:58 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>