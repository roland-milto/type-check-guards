# areSymbols

## Beschrijving

Controleert of een invoer een gevulde array is waarvan de elementen allemaal symbolen zijn, en retourneert `true` of
`false`.

### Use case

Valideer dat een configuratieveld (bijv. een lijst met unieke sleutels die als symbolen worden weergegeven) een
niet-lege array is die alleen symbolen bevat voordat je het gebruikt in API's die `symbol[]` vereisen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areSymbols` om onbekende invoer te valideren voordat je deze als `symbol[]` behandelt; het retourneert
`false` voor niet-arrays en lege arrays.

### Voordelen

- Retourneert `true` alleen wanneer de invoer een niet-lege array is en elk element een symbool is.
- Voorkomt fout-positieven door niet-arrays en lege arrays af te wijzen via de interne filled-array-controle.
- Handig als runtime type guard om lijsten met uitsluitend symbolen te valideren vóór verdere verwerking.

## Gebruik

### Syntax

Functie:

- `areSymbols(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op symbool-elementen.

### Lokale functie-import

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a is tijdens runtime een array met alleen symbolen
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areSymbols(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:22:55 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>