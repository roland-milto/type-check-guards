# arePromises

## Beschrijving

`arePromises` bepaalt of alle elementen in een array `Promise`-instanties zijn.

### Use case

Valideer dat een dynamisch opgebouwde of extern aangeleverde lijst uitsluitend promises bevat voordat je ze aggregeert (
bijv. met `Promise.all`).

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `arePromises` om `unknown[]` te valideren voordat je `Promise.all` of andere alleen-voor-promises bewerkingen
> aanroept; het geeft `false` terug voor lege arrays.

### Voordelen

- Zorgt ervoor dat elk element een `Promise` is voordat je verdergaat met promise-specifieke logica.
- Geeft `false` terug voor niet-gevulde arrays, waardoor dubbelzinnige resultaten bij lege invoer worden voorkomen.
- Handig als runtime-guard bij het werken met `unknown[]` uit externe bronnen.

## Gebruik

### Syntax

Functie:

- `arePromises(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op Promise-instanties.

### Lokale functie-import

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values is tijdens runtime een array van Promise-instanties
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.arePromises(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:49:16 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>