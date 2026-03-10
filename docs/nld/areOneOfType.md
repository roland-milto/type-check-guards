# areOneOfType

## Beschrijving

`areOneOfType` controleert of alle elementen in een niet-lege array één van de opgegeven runtime-typen hebben.

### Use case

Valideer binnenkomende data (bijv. geparseerde JSON) waarbij een veld een niet-lege array moet zijn waarvan de items
beperkt zijn tot een bekende set primitieve typen; retourneer `false` wanneer de array leeg is of een niet-toegestaan
type bevat.

> **Hint voor TypeScript-gebruikers:**
>
> Deze functie retourneert een boolean en versmalt de array-elementtypen niet tijdens compile time; gebruik het als een
> runtime-validatiestap vóór verdere verwerking.

### Voordelen

- Zorgt ervoor dat elk element in een array overeenkomt met ten minste één toegestane runtime-type, en geeft alleen
  `true` terug wanneer de volledige array slaagt.
- Wijst ongeldige invoer vroegtijdig af: geeft `false` terug wanneer `array` of `types` leeg is of geen gevulde array
  is.
- Handig voor het valideren van collecties met gemengde typen (bijv. getallen en strings) met één aanroep van
  `areOneOfType`.

## Gebruik

### Syntax

Functie:

- `areOneOfType(array, types)`

Parameters:

- `array`: Een array met elementen die moeten worden gecontroleerd tegen de opgegeven typen.
- `types`: Een array met strings die de datatypen vertegenwoordigen waartegen gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areOneOfType(array, types)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 23:37:59 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>