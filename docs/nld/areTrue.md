# areTrue

## Beschrijving

Controleert of een niet-lege array alleen de booleaanse waarde `true` bevat.

### Use case

Gebruik `areTrue` om te valideren dat een set randvoorwaarden of feature flags allemaal zijn ingeschakeld (alle waarden
zijn `true`) voordat je doorgaat, terwijl lege of onjuist gevormde invoer wordt behandeld als niet voldaan (`false`).

> **Hint voor TypeScript-gebruikers:**
>
> `areTrue` retourneert `false` voor een lege array en voor arrays die een waarde bevatten die niet strikt `true` is.

### Voordelen

- Retourneert `true` alleen wanneer elk element strikt `true` is en de array niet leeg is.
- Faalt snel: retourneert `false` zodra een niet-`true` waarde wordt gevonden.
- Wijst ongeldige invoer (geen arrays of lege arrays) af door `false` te retourneren.

## Gebruik

### Syntax

Functie:

- `areTrue(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op uitsluitend `true`-waarden.

### Lokale functie-import

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areTrue(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:52:08 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>