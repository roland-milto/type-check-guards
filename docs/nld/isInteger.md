# isInteger

## Beschrijving

Bepaalt of een gegeven `value` een veilig integergetal is.

### Use case

Valideer onbetrouwbare invoer (bijv. queryparameters, JSON-payloads, omgevingsvariabelen) voordat je die als integer
gebruikt voor array-indexen, paginering, tellers of database-ID's.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isInteger` om onbekende invoer te valideren voordat je die als numerieke integer behandelt; het retourneert
`true` alleen voor waarden waarvoor `typeof value === "number"` en `Number.isSafeInteger(value)`.

### Voordelen

- Controleert zowel type- als numerieke veiligheid: retourneert `true` alleen wanneer de invoer een getal en een veilige
  integer is.
- Voorkomt veelvoorkomende valkuilen bij numerieke coercie: strings zoals "5" retourneren correct `false`.
- Wijst niet-integers en onveilige integers af, waardoor het geschikt is voor ID's, tellers en array-indexering.

## Gebruik

### Syntax

Functie:

- `isInteger(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op integerstatus.

### Lokale functie-import

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // waar
const b = isInteger(-100);   // waar
const c = isInteger("5");    // onwaar
const d = isInteger(5.5);    // onwaar
const e = isInteger(null);   // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isInteger(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:50:51 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>