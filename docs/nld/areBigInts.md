# areBigInts

## Beschrijving

`areBigInts` bepaalt of een waarde een niet-lege array is die uitsluitend `bigint`-waarden bevat.

### Use case

Valideer onbekende invoer (bijv. geparseerde JSON-achtige data, API-payloads of functieparameters getypeerd als
`unknown`) om te garanderen dat het een niet-lege array van `bigint`-waarden is voordat je deze verwerkt; geeft alleen
`true` terug wanneer alle elementen `bigint` zijn, anders `false`.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areBigInts` als een runtime-guard voordat je `bigint`-only bewerkingen (bijv. rekenkunde, vergelijkingen)
> uitvoert op onbekende invoer.

### Voordelen

- Zorgt ervoor dat elk element een `bigint` is en geeft alleen `true` terug wanneer de volledige array overeenkomt.
- Wijst niet-arrays en lege arrays bewust af (via `isFilledArray`), waardoor onbedoelde acceptatie van ongeldige invoer
  wordt voorkomen.
- Snelle afbreking: geeft `false` terug zodra een niet-`bigint`-element wordt gevonden.

## Gebruik

### Syntax

Functie:

- `areBigInts(array)`

Parameters:

- `array`: De waarde om te controleren.

### Lokale functie-import

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // waar
console.log(areBigInts(b)); // onwaar
console.log(areBigInts(c)); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areBigInts(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 23:26:49 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>