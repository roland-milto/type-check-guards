# areWeakMaps

## Popis

`areWeakMaps` kontroluje, či je hodnota neprázdne pole, v ktorom je každý prvok `WeakMap`, pričom vráti `true` iba v
takom prípade a inak `false`.

### Prípad použitia

Overte údaje za behu (napr. parsované JSON, vstupy pluginov alebo voľne typovanú konfiguráciu), aby ste sa uistili, že
ide o neprázdne pole inštancií `WeakMap` pred iterovaním a volaním metód `WeakMap`; vráti `false`, keď niektorý prvok
nie je `WeakMap` alebo keď je pole prázdne.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areWeakMaps` na overenie neznámeho vstupu predtým, než s ním budete narábať ako s neprázdnym `WeakMap[]`; pre
> prázdne polia vracia `false`.

### Výhody

- Zabezpečuje, že každý prvok v poskytnutom poli je inštancia `WeakMap`.
- Pre prázdne polia vracia `false`, čím zabraňuje náhodnému prijatiu „žiadnych údajov“ ako platného vstupu.
- Užitočné ako ochranná kontrola pred vykonávaním operácií špecifických pre `WeakMap` na všetkých položkách.

## Použitie

### Syntax

Funkcia:

- `areWeakMaps(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na inštancie `WeakMap`.

### Lokálny import funkcie

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list je neprázdne pole inštancií WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nie je to neprázdne WeakMap[]
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areWeakMaps(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:39:19 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>