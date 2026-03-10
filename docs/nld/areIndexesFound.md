# areIndexesFound

## Beschrijving

`areIndexesFound` controleert of een waarde een niet-lege array is waarvan alle elementen geldige indexen zijn, en geeft
`true` terug als dat zo is en anders `false`.

### Use case

Valideer door gebruikers aangeleverde of externe gegevens (bijv. geparseerde JSON) waarvan wordt verwacht dat het een
lijst met indexen is, voordat je deze gebruikt om arrays te benaderen of te slicen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areIndexesFound` om onbekende invoer te valideren voordat je de elementen ervan als array-indexen behandelt;
> het geeft `false` terug voor lege arrays en voor arrays die niet-indexwaarden bevatten.

### Voordelen

- Geeft `true` alleen terug wanneer de invoer een gevulde array is en elk element een geldige index is.
- Faalt snel: geeft `false` terug zodra een niet-indexelement wordt aangetroffen.
- Handig als guard voordat waarden worden gebruikt als arrayposities of offsets.

## Gebruik

### Syntax

Functie:

- `areIndexesFound(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op indexconformiteit.

### Lokale functie-import

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // waar
console.log(areIndexesFound(b)); // onwaar
console.log(areIndexesFound(c)); // onwaar

if (areIndexesFound(a)) {
  // Hier wordt bevestigd dat `a` een gevulde array met indexen is.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areIndexesFound(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:42:57 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>