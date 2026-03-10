# areDates

## Popis

`areDates` určuje, či je dané pole naplnené a obsahuje iba objekty `Date`, pričom vráti `true` len vtedy, keď sú všetky
prvky platné dátumy.

### Prípad použitia

Použite `areDates` na overenie neznámeho vstupu (napr. parsovaný JSON, údaje z formulára, API payloady) pred spustením
logiky špecifickej pre dátumy, ako je triedenie podľa času, formátovanie alebo výpočet rozsahov.

> **Poznámka pre používateľov TypeScriptu:**
>
> Vráti `true` iba pre neprázdne polia, kde je každý prvok `Date`; prázdne polia vrátia `false`.

### Výhody

- Zabezpečí, že pole nie je prázdne pred overením jeho obsahu, čím zabráni výsledku `true` pre prázdne vstupy.
- Overí, že každý prvok je inštancia `Date`, pričom pri prvom nesúlade okamžite vráti `false`.
- Užitočné ako kontrola v štýle guard pred vykonávaním operácií špecifických pre dátumy na položkách poľa.

## Použitie

### Syntax

Funkcia:

- `areDates(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na objekty `Date`.

### Lokálny import funkcie

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // pravda
console.log(areDates(b)); // nepravda
console.log(areDates(c)); // nepravda

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areDates(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areDates](../_analysis/areDates.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 15:32:13 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>