# isFinite

## Beschrijving

Bepaalt of een gegeven `value` een eindig `number` is.

### Use case

Gebruik `isFinite` om onbekende invoer (bijv. uit JSON, formulieren of API's) te valideren voordat je numerieke
berekeningen uitvoert, zodat de waarde een echt, eindig getal is.

> **Hint voor TypeScript-gebruikers:**
>
> `isFinite` retourneert `true` alleen voor eindige getallen; het retourneert `false` voor `NaN`, `Infinity` en elke
> waarde die geen getal is.

### Voordelen

- Gebruikt de ingebouwde `Number.isFinite` voor een betrouwbare controle op eindigheid.
- Retourneert `true` alleen voor eindige getallen; retourneert `false` voor `NaN`, `Infinity` en invoer die geen getal
  is.
- Eenvoudige, bijwerkingenvrije predicaat die geschikt is voor validatie- en guard-logica.

## Gebruik

### Syntax

Functie:

- `isFinite(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op eindigheid.

### Lokale functie-import

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers is: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value is hier een eindig getal
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isFinite(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 16:30:59 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>