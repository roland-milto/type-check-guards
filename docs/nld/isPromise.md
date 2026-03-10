# isPromise

## Beschrijving

Bepaalt of een gegeven waarde een `Promise` is.

### Use case

Gebruik `isPromise` om onbekende invoer te valideren voordat je die als een `Promise` behandelt, bijvoorbeeld bij het
afhandelen van waarden die worden geretourneerd door plugins, dynamische imports of losjes getypeerde API's.

> **Hint voor TypeScript-gebruikers:**
>
> `isPromise` controleert via `instanceof Promise`, dus het retourneert alleen `true` voor echte `Promise`-instanties (
> niet voor generieke thenables).

### Voordelen

- Biedt een eenvoudige runtime-controle om te bepalen of een waarde een `Promise` is.
- Helpt codepaden te beveiligen die een echte `Promise`-instantie vereisen, en retourneert voorspelbaar `true` of
  `false`.
- Voorkomt fout-positieven van “thenable”-objecten (bijv. `{ then() {} }`) door een daadwerkelijke `Promise`-instantie
  te vereisen.

## Gebruik

### Syntax

Functie:

- `isPromise(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // waar
console.log(isPromise(b)); // onwaar
console.log(isPromise(123)); // onwaar
console.log(isPromise(null)); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isPromise(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:53:43 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>