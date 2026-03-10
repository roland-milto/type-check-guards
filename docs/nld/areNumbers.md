# areNumbers

## Beschrijving

`areNumbers` controleert of een waarde een niet-lege array is waarvan alle elementen getallen zijn.

### Use case

Valideer door gebruikers of door een API aangeleverde data om te garanderen dat het een niet-lege array van getallen is
voordat je totalen, gemiddelden of andere numerieke aggregaties berekent.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areNumbers` om onbekende arrays te valideren voordat je numerieke berekeningen uitvoert; het retourneert
`false` voor lege arrays en voor arrays die een niet-getalwaarde bevatten.

### Voordelen

- Retourneert `true` alleen wanneer de invoer een niet-lege array is en elk element een getal is.
- Voorkomt fout-positieven door lege arrays en invoer die geen array is af te wijzen.
- Handig als guard vóór numerieke bewerkingen (bijv. optellen, middelen) om runtimefouten te voorkomen.

## Gebruik

### Syntax

Functie:

- `areNumbers(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op getalelementen.

### Lokale functie-import

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areNumbers(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:05:19 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>