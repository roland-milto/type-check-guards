# isPromise

## Popis

Určuje, či je daná hodnota `Promise`.

### Prípad použitia

Použite `isPromise` na overenie neznámych vstupov predtým, než s nimi budete zaobchádzať ako s `Promise`, napríklad pri
spracovaní hodnôt vrátených z pluginov, dynamických importov alebo voľne typovaných API.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isPromise` kontroluje cez `instanceof Promise`, takže vráti `true` iba pre skutočné inštancie `Promise` (nie pre
> všeobecné thenables).

### Výhody

- Poskytuje jednoduchú kontrolu za behu, či je hodnota `Promise`.
- Pomáha chrániť vetvy kódu, ktoré vyžadujú skutočnú inštanciu `Promise`, pričom predvídateľne vracia `true` alebo
  `false`.
- Predchádza falošným pozitívam z „thenable“ objektov (napr. `{ then() {} }`) tým, že vyžaduje skutočnú inštanciu
  `Promise`.

## Použitie

### Syntax

Funkcia:

- `isPromise(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // pravda
console.log(isPromise(b)); // nepravda
console.log(isPromise(123)); // nepravda
console.log(isPromise(null)); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isPromise(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:54:12 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>