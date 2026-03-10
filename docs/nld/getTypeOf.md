# getTypeOf

## Beschrijving

`getTypeOf` retourneert een gedetailleerd, menselijk leesbaar typelabel voor een gegeven waarde, inclusief verfijnde
numerieke typen en specifieke objectsoorten.

### Use case

Gebruik `getTypeOf` om typedetectie te normaliseren bij inputvalidatie en diagnostiek—bijvoorbeeld om `nan` te weigeren,
alleen `integer`-ID’s te accepteren, numerieke strings zoals `decimal` anders te behandelen dan gewone `string`, of om
precieze objectsoorten zoals `date` en `regexp` te loggen.

> **Hint voor TypeScript-gebruikers:**
>
> Het returntype is `DataTypeAsString | string`. Behandel het als een beschrijvend label; vergelijk met bekende literals
> zoals `integer`, `float`, `nan`, `array`, `null` en `undefined` bij het vertakken.

### Voordelen

- Geeft een fijnmaziger type-aanduiding terug dan JavaScript’s `typeof`, inclusief numerieke subtypen zoals `integer`,
  `float` en `nan`.
- Maakt expliciet onderscheid tussen `null` en `undefined` als `null` en `undefined`.
- Detecteert veelvoorkomende numerieke stringformaten en rapporteert ze als `binary`, `octal`, `decimal` of
  `hexadecimal` in plaats van als gewone `string`.
- Herkent ook arrays als `array` en gebruikt `Object.prototype.toString` om specifieke objecttypenamen te geven (bijv.
  `date`, `regexp`, `map`, `set`).
- Zeer nuttig voor validatie, logging en debugging waar consistente, menselijk leesbare typelabels nodig zijn.

## Gebruik

### Syntax

Functie:

- `getTypeOf(value)`

Parameters:

- `value`: De waarde waarvoor het datatype bepaald moet worden.

### Lokale functie-import

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Voorbeeldcontroles
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.getTypeOf(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 13:13:39 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>