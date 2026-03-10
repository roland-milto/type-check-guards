# isWeakSet

## Beschrijving

Bepaalt of de gegeven `value` een `WeakSet` van objecten is.

### Use case

Gebruik `isWeakSet` wanneer je ongetypeerde invoer accepteert (bijv. van externe API's, dynamische configuratie of
`unknown`-waarden) en je moet verifiëren dat het een `WeakSet` is voordat je `WeakSet`-specifieke bewerkingen gebruikt.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isWeakSet` om een `unknown`-waarde tijdens runtime te verfijnen naar `WeakSet<object>`; let op dat `WeakSet`
> alleen objectreferenties kan bevatten.

### Voordelen

- Biedt een eenvoudige runtime-controle om te bepalen of een waarde een `WeakSet` is.
- Helpt typefouten te voorkomen door ervoor te zorgen dat alleen `WeakSet`-instanties als zodanig worden behandeld.
- Werkt met elke `unknown`-invoer en geeft een duidelijk booleaans resultaat (`true`/`false`).

## Gebruik

### Syntax

Functie:

- `isWeakSet(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // waar
console.log(isWeakSet(b)); // onwaar

if (isWeakSet(a)) {
  // a is een WeakSet tijdens runtime
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isWeakSet(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:18:25 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>