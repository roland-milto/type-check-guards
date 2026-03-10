# isIndexFound

## Beschrijving

`isIndexFound` bepaalt of een gegeven waarde een niet-negatief geheel getal is, wat aangeeft dat er een index is
gevonden.

### Use case

Valideer dat een zoekresultaat een bruikbare index vertegenwoordigt (geheel getal `>= 0`) voordat je een array of string
indexeert, om onbedoeld gebruik van `-1` of niet-numerieke waarden te voorkomen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isIndexFound` na bewerkingen zoals `indexOf`, `findIndex` of aangepaste zoekopdrachten waarbij `-1` (of
> andere ongeldige waarden) “niet gevonden” kan aangeven. Wanneer het `true` retourneert, is de waarde een getal en veilig
> te gebruiken als array-/stringindex.

### Voordelen

- Biedt een eenvoudige type guard om te detecteren of er een index is gevonden door te controleren op een niet-negatief
  geheel getal.
- Retourneert `true` alleen voor geldige index-achtige waarden (gehele getallen `>= 0`), en wijst negatieve waarden,
  niet-gehele getallen en niet-numerieke waarden af.
- Helpt off-by-one- en sentinel-waarde-fouten te voorkomen bij het werken met API’s die `-1` retourneren voor “niet
  gevonden”.

## Gebruik

### Syntax

Functie:

- `isIndexFound(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op het zijn van een niet-negatief geheel getal.

### Lokale functie-import

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx is hier een getal en is >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typisch gebruik met indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isIndexFound(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:47:07 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>