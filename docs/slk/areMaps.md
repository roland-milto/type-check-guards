# areMaps

## Popis

`areMaps` určuje, či je dané pole neprázdne a či sú všetky jeho prvky inštanciami `Map`.

### Prípad použitia

Overte neznámy vstup (napr. z parsovania JSON, externých API alebo dynamických zdrojov) predtým, než ho budete považovať
za neprázdny zoznam objektov `Map`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Pre prázdne pole vráti `false`; `true` vráti iba vtedy, keď je pole naplnené a každý prvok je `Map`.

### Výhody

- Zabezpečuje, že každý prvok je inštancia `Map`, pričom vráti `true` iba vtedy, keď kontrolou prejde celé pole.
- Zámerne odmieta prázdne polia, čím zabraňuje náhodnému prijatiu „žiadnych údajov“ ako platného vstupu.
- Užitočné ako stráž (guard) pred vykonávaním operácií špecifických pre `Map` (napr. `.get()`, `.set()`, iterácia)
  naprieč kolekciou.

## Použitie

### Syntax

Funkcia:

- `areMaps(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items je za behu zaručene ako neprázdne pole inštancií Map
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false pre: prázdne polia alebo polia obsahujúce akúkoľvek hodnotu, ktorá nie je Map
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areMaps(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 16:14:28 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>