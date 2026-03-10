# isBigInt

## Beschrijving

`isBigInt` controleert of een gegeven waarde van het type `bigint` is, en geeft `true` terug voor BigInt-primitieven en
anders `false`.

### Use case

Valideer en verfijn waarden die uit ongetypeerde bronnen komen (bijv. JSON-parsing, gebruikersinvoer, externe API's)
voordat je BigInt-specifieke berekeningen uitvoert of ze opslaat in velden die alleen BigInt accepteren.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isBigInt` om `unknown` te verfijnen naar `bigint` voordat je BigInt-rekenkunde uitvoert (bijv. `+`, `*`), wat
> BigInt-operanden vereist.

### Voordelen

- Biedt een eenvoudige, betrouwbare runtime-controle voor het primitieve type `bigint`.
- Helpt `unknown`-waarden te verfijnen voordat je BigInt-only bewerkingen uitvoert.
- Voorkomt fout-positieven: gewone getallen, strings en andere typen geven `false` terug.

## Gebruik

### Syntax

Functie:

- `isBigInt(value)`

Parameters:

- `value`: De waarde om te controleren.

### Lokale functie-import

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // waar
console.log(isBigInt(10));  // onwaar
console.log(isBigInt("10")); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isBigInt(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 23:32:44 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>