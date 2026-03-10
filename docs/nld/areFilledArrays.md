# areFilledArrays

## Beschrijving

`areFilledArrays` controleert of een tweedimensionale array niet leeg is en of al zijn subarrays niet leeg zijn.

### Use case

Gebruik `areFilledArrays` om tabulaire of matrixachtige invoer (bijv. CSV-rijen, griddata, gegroepeerde resultaten) te
valideren, zodat je veilig kunt aannemen dat er minstens één subarray is en dat geen van de subarrays leeg is.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areFilledArrays` wanneer je wilt garanderen dat een 2D-array minstens één rij heeft en dat elke rij minstens
> één element heeft voordat je eroverheen itereert of erin indexeert.

### Voordelen

- Valideert dat de buitenste array niet leeg is en dat elke binnenste array ook niet leeg is, en geeft alleen `true`
  terug wanneer aan beide voorwaarden is voldaan.
- Werkt met elk elementtype binnen de subarrays (bijv. getallen, strings, objecten, geneste arrays) omdat het alleen
  controleert of de array “gevuld” is, niet de inhoud van de elementen.
- Biedt een eenvoudig booleaans resultaat (`true`/`false`) dat geschikt is als guard voordat je tweedimensionale data
  verwerkt.

## Gebruik

### Syntax

Functie:

- `areFilledArrays(array)`

Parameters:

- `array`: De tweedimensionale array om te controleren.

### Lokale functie-import

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // waar
console.log(areFilledArrays(b)); // waar
console.log(areFilledArrays(c)); // waar
console.log(areFilledArrays(d)); // onwaar
console.log(areFilledArrays(e)); // onwaar
console.log(areFilledArrays(f)); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areFilledArrays(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 11:58:01 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>