# areWeakSets

## Popis

Kontroluje, či je vstup neprázdne pole, kde je každý prvok `WeakSet`, pričom `true` vráti iba v tomto prípade.

### Prípad použitia

Overte vstup za behu (napr. z API, konfigurácie alebo používateľom poskytnutých údajov), aby ste sa uistili, že máte
neprázdny zoznam inštancií `WeakSet` pred pokračovaním v logike, ktorá závisí od správania `WeakSet`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areWeakSets` na overenie neznámeho vstupu predtým, než s ním budete narábať ako s `WeakSet[]`. Pre prázdne
> polia a nepolia vracia `false`.

### Výhody

- Zabezpečuje, že každý prvok vo vstupnom poli je `WeakSet`.
- Pre prázdne polia vracia `false`, čím zabraňuje náhodným výsledkom „všetko je platné“ pri chýbajúcich údajoch.
- Bezpečne zlyhá vrátením `false`, keď vstup nie je naplnené pole (vrátane `null`).
- Užitočné ako strážna podmienka pred vykonávaním operácií, ktoré vyžadujú inštancie `WeakSet`.

## Použitie

### Syntax

Funkcia:

- `areWeakSets(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na objekty `WeakSet`.

### Lokálny import funkcie

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a je neprázdne pole inštancií WeakSet
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areWeakSets(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:10:50 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>