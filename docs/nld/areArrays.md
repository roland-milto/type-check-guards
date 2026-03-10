# areArrays

## Beschrijving

`areArrays` bepaalt of een waarde een gevulde tweedimensionale array is waarvan alle items arrays zijn.

### Use case

Gebruik `areArrays` om tabel- of matrixachtige invoer (bijv. CSV-rijen, griddata of gegroepeerde lijsten) te valideren
voordat je rij-/kolombewerkingen uitvoert; het retourneert `false` als de invoer geen array is, leeg is of een
niet-array-element bevat.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areArrays` wanneer je moet garanderen dat een waarde een niet-lege 2D-array is en dat elke rij een array is
> voordat je over geneste arrays itereert of erin indexeert.

### Voordelen

- Valideert dat de invoer een niet-lege tweedimensionale array is waarbij elk element een array is.
- Retourneert een eenvoudig booleaans resultaat (`true`/`false`) dat geschikt is voor guards en vroege exits.
- Helpt runtimefouten te voorkomen wanneer latere code uitgaat van geneste arraybewerkingen (bijv. rijen mappen).

## Gebruik

### Syntax

Functie:

- `areArrays(array)`

Parameters:

- `array`: De invoer die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // waarde is een 2D-array met arrays als elementen
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areArrays(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 13:40:43 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>