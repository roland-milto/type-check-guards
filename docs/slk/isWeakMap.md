# isWeakMap

## Popis

Určuje, či je daná hodnota `value` inštanciou `WeakMap`.

### Prípad použitia

Použite `isWeakMap`, keď prijímate hodnotu typu `unknown` (napr. z verejného API, systému pluginov alebo dynamickej
konfigurácie) a potrebujete overiť, že ide o `WeakMap`, predtým než použijete správanie špecifické pre `WeakMap`.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isWeakMap` vykonáva kontrolu `instanceof WeakMap`; je to runtime guard, ktorý vráti `true` iba pre skutočné inštancie
`WeakMap`.

### Výhody

- Jednoduchá kontrola za behu, či je hodnota `WeakMap`.
- Pomáha predchádzať nesprávnemu použitiu API, ktoré vyžaduje `WeakMap`, tým, že vracia `true`/`false` namiesto
  vyhodenia chyby.
- Funguje so vstupmi typu `unknown`, čo je praktické na hraniciach modulov (napr. parsovanie, externé dáta alebo
  netypovaný kód).

## Použitie

### Syntax

Funkcia:

- `isWeakMap(value)`

Parametre:

- `value`: Hodnota, ktorú treba skontrolovať.

### Lokálny import funkcie

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a je WeakMap za behu
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isWeakMap(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:26:50 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>