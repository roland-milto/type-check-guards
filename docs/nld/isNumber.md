# isNumber

## Beschrijving

`isNumber` controleert of een waarde een eindig, niet-`NaN` getal is.

### Use case

Valideer numerieke invoer uit onbetrouwbare bronnen (formulieren, queryparameters, JSON-payloads) vóór berekeningen,
opslag of bereikcontroles, zodat alleen eindige getallen slagen (`true`) en al het andere `false` retourneert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isNumber` om `unknown`-waarden te valideren voordat je rekenkundige bewerkingen uitvoert; het wijst `NaN`,
`Infinity` en `-Infinity` af.

### Voordelen

- Geeft alleen `true` terug voor echte JavaScript-getallen (typecontrole plus afwijzing van `NaN` en oneindigheid).
- Voorkomt veelvoorkomende validatiefouten waarbij `NaN`, `Infinity` of `-Infinity` per ongeluk als getallen worden
  geaccepteerd.
- Werkt goed als runtime-guard voor onbekende invoer (bijv. JSON, gebruikersinvoer, externe API's).
- Eenvoudig, snel en zonder bijwerkingen.

## Gebruik

### Syntax

Functie:

- `isNumber(value)`

Parameters:

- `value`: De waarde om te controleren.

### Lokale functie-import

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // invoer is een geldig eindig getal
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isNumber(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:10:14 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>