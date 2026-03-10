# areWeakSets

## Beschrijving

Controleert of een invoer een niet-lege array is waarbij elk element een `WeakSet` is, en geeft alleen in dat geval
`true` terug.

### Use case

Valideer runtime-invoer (bijv. van API’s, configuratie of door gebruikers aangeleverde data) om ervoor te zorgen dat je
een niet-lege lijst met `WeakSet`-instanties hebt voordat je doorgaat met logica die afhankelijk is van `WeakSet`
-gedrag.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areWeakSets` om onbekende invoer te valideren voordat je deze als `WeakSet[]` behandelt. Het geeft `false`
> terug voor lege arrays en niet-arrays.

### Voordelen

- Zorgt ervoor dat elk element in de invoerarray een `WeakSet` is.
- Geeft `false` terug voor lege arrays, waardoor onbedoelde “alles geldig”-resultaten bij ontbrekende gegevens worden
  voorkomen.
- Faalt veilig door `false` terug te geven wanneer de invoer geen gevulde array is (inclusief `null`).
- Handig als guard voordat bewerkingen worden uitgevoerd die `WeakSet`-instanties vereisen.

## Gebruik

### Syntax

Functie:

- `areWeakSets(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op `WeakSet`-objecten.

### Lokale functie-import

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a is een niet-lege array van WeakSet-instanties
}

console.log(areWeakSets(a)); // waar
console.log(areWeakSets(b)); // onwaar
console.log(areWeakSets(c)); // onwaar
console.log(areWeakSets(null as unknown)); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areWeakSets(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:10:05 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>