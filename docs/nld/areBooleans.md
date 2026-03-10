# areBooleans

## Beschrijving

`areBooleans` controleert of een gegeven niet-lege array uitsluitend boolean-waarden bevat, en retourneert `true` als
dat zo is en anders `false`.

### Use case

Valideer door gebruikers aangeleverde of externe data (bijv. JSON-payloads, queryparameters, configuratie-arrays) om te
garanderen dat een niet-lege lijst uitsluitend booleans bevat voordat je boolean-logica toepast of het doorgeeft aan
API's die `boolean[]` verwachten.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areBooleans` om `unknown[]` te valideren voordat je het als `boolean[]` behandelt; het retourneert `false`
> voor lege arrays, dus handel dat geval expliciet af als een lege lijst toegestaan moet zijn.

### Voordelen

- Retourneert `true` alleen wanneer elk element een boolean is en de invoer een niet-lege array is.
- Voorkomt fout-positieven door lege arrays af te wijzen (retourneert `false`).
- Werkt goed als runtime-guard vóór boolean-only bewerkingen (bijv. `every`, `some`, logische reducties).

## Gebruik

### Syntax

Functie:

- `areBooleans(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op boolean-elementen.

### Lokale functie-import

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areBooleans(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:41:31 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>