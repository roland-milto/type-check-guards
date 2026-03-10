# isUndefined

## Beschrijving

Controleert of een gegeven waarde `undefined` is.

### Use case

Gebruik `isUndefined` om optionele invoer te bewaken, ontbrekende eigenschappen te detecteren of onderscheid te maken
tussen “niet opgegeven” (`undefined`) en “expliciet leeg” (`null`).

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isUndefined` wanneer je specifiek `undefined` moet detecteren (niet `null`). Het is veilig omdat het
> vertrouwt op `typeof value === "undefined"`.

### Voordelen

- Biedt een duidelijke, expliciete controle op `undefined` met behulp van `typeof`, waardoor randgevallen met
  niet-aangegeven variabelen worden vermeden.
- Geeft een eenvoudig booleaans resultaat (`true`/`false`) terug dat geschikt is voor guards, vertakkingen en
  validatielogica.
- Helpt `undefined` te onderscheiden van andere “lege” waarden zoals `null`, `0`, `""` of `NaN`.

## Gebruik

### Syntax

Functie:

- `isUndefined(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x is hier undefined
} else {
  // x is hier niet undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isUndefined(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:03:43 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>