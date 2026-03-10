# areEqual

## Beschrijving

`areEqual` controleert of alle elementen in een array gelijk zijn aan een gegeven verwachte waarde, en geeft alleen
`true` terug voor niet-lege arrays waarbij elk item overeenkomt.

### Use case

Valideer dat een lijst alleen één toegestane waarde bevat (bijv. alle statusvlaggen zijn `true`, alle rollen zijn
`"admin"`, of alle numerieke invoer gelijk is aan een vereiste constante) terwijl lege invoer als ongeldig (`false`)
wordt behandeld.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areEqual` wanneer je een strikte controle op alle items nodig hebt; het geeft `false` terug voor lege arrays
> en voor elke invoer die geen array is of niet gevuld is.

### Voordelen

- Geeft alleen `true` terug wanneer elk element overeenkomt met de verwachte waarde; anders geeft het `false` terug.
- Faalt snel: stopt met controleren zodra een niet-overeenkomend element wordt gevonden.
- Beschermt tegen ongeldige invoer door `false` terug te geven wanneer de invoer geen gevulde array is.

## Gebruik

### Syntax

Functie:

- `areEqual(value, expected)`

Parameters:

- `value`: De array die gecontroleerd moet worden.
- `expected`: Het element waarmee elk item in de array wordt vergeleken.

### Lokale functie-import

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areEqual(value, expected)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 23:51:32 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>