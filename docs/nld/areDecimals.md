# areDecimals

## Beschrijving

Controleert of alle elementen in een array decimale getallen zijn en de array gevuld is, en retourneert `true` of
`false`.

### Use case

Valideer door gebruikers aangeleverde lijsten (bijv. CSV-kolommen of formulierinvoer) om ervoor te zorgen dat de array
niet leeg is en elke invoer een decimale waarde is vóór het parsen of uitvoeren van berekeningen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areDecimals` wanneer je een snelle booleaanse controle nodig hebt dat een `unknown[]` niet leeg is en dat elk
> element een decimale representatie is.

### Voordelen

- Zorgt ervoor dat de invoer een gevulde array is voordat items worden gevalideerd, waardoor onbedoelde acceptatie van
  lege lijsten wordt voorkomen.
- Valideert elk element met `isDecimal`, zodat gemengde of ongeldige waarden direct een `false`-resultaat opleveren.
- Biedt een eenvoudige booleaanse uitkomst (`true`/`false`) die geschikt is voor guards en validatiestromen met vroege
  return.

## Gebruik

### Syntax

Functie:

- `areDecimals(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // waar
console.log(areDecimals(b)); // onwaar
console.log(areDecimals(c)); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areDecimals(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 15:58:16 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>