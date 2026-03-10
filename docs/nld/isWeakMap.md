# isWeakMap

## Beschrijving

Bepaalt of een gegeven `value` een `WeakMap`-instantie is.

### Use case

Gebruik `isWeakMap` wanneer je een `unknown` waarde accepteert (bijv. uit een publieke API, pluginsysteem of dynamische
configuratie) en moet verifiëren dat het een `WeakMap` is voordat je `WeakMap`-specifiek gedrag gebruikt.

> **Hint voor TypeScript-gebruikers:**
>
> `isWeakMap` voert een `instanceof WeakMap`-controle uit; het is een runtime-guard die alleen `true` teruggeeft voor
> echte `WeakMap`-instanties.

### Voordelen

- Eenvoudige runtimecontrole om te bepalen of een waarde een `WeakMap` is.
- Helpt misbruik te voorkomen van API's die een `WeakMap` vereisen door `true`/`false` terug te geven in plaats van een
  fout te gooien.
- Werkt met `unknown`-invoer, wat het handig maakt bij modulegrenzen (bijv. parsing, externe data of ongetypeerde code).

## Gebruik

### Syntax

Functie:

- `isWeakMap(value)`

Parameters:

- `value`: De waarde om te controleren.

### Lokale functie-import

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a is een WeakMap tijdens runtime
}

console.log(isWeakMap(a)); // waar
console.log(isWeakMap(b)); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isWeakMap(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:26:07 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>