# areFinite

## Beschrijving

`areFinite` controleert of een waarde een niet-lege array is waarvan de elementen allemaal eindige getallen zijn, en
retourneert `true` als dat zo is en anders `false`.

### Use case

Valideer numerieke invoerarrays (bijv. grafiekreeksen, coördinatenlijsten, meetmonsters) voordat je berekeningen
uitvoert, zodat het resultaat alleen `true` is wanneer alle waarden eindige getallen zijn.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areFinite` wanneer je wilt garanderen dat een array niet leeg is en alleen eindige getallen bevat; het
> retourneert `false` voor lege arrays en voor arrays die `NaN` of oneindigheden bevatten.

### Voordelen

- Retourneert `true` alleen wanneer de invoer een niet-lege array is en elk element een eindig getal is.
- Wijst `Infinity`, `-Infinity` en `NaN` af door te vertrouwen op `isFinite`-controles voor elk element.
- Biedt een eenvoudig booleaans resultaat (`true`/`false`) dat geschikt is voor guards en validatiestromen.

## Gebruik

### Syntax

Functie:

- `areFinite(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op eindigheid van al zijn elementen.

### Lokale functie-import

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // waar
console.log(areFinite(b)); // onwaar
console.log(areFinite(c)); // onwaar

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areFinite(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 16:36:15 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>