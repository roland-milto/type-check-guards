# areStrings

## Beschrijving

`areStrings` controleert of een array niet leeg is en of al zijn elementen strings zijn, en retourneert alleen in dat
geval `true`.

### Use case

Valideer externe of door gebruikers aangeleverde data (bijv. queryparameters, JSON-payloads, CSV-velden) om te zorgen
dat je een niet-lege lijst met strings hebt voordat je gaat verwerken.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areStrings` om onbekende arrays te valideren voordat je string-only logica toepast; het retourneert `false`
> voor lege arrays.

### Voordelen

- Zorgt ervoor dat elk element een string is en wijst arrays met gemengde typen af door `false` te retourneren.
- Wijst lege arrays af, dus `true` betekent alleen een niet-lege lijst met strings.
- Handig als snelle runtime-guard voordat je string-only bewerkingen uitvoert (bijv. `trim`, `toLowerCase`).

## Gebruik

### Syntax

Functie:

- `areStrings(value)`

Parameters:

- `value`: Expected type `string[]`.

### Lokale functie-import

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input is tijdens runtime een niet-lege string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areStrings(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:19:41 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>