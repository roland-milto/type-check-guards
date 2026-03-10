# areObjects

## Popis

`areObjects` kontroluje, či poskytnuté vyplnené pole obsahuje iba objekty.

### Prípad použitia

Použite `areObjects`, keď dostanete neznáme pole (napr. z parsovania JSON alebo externých API) a potrebujete sa uistiť,
že nie je prázdne a že každý prvok je objekt pred iterovaním a prístupom k vlastnostiam objektu.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areObjects` na overenie `unknown[]` pred tým, než budete položky považovať za objekty; pre prázdne polia
> vracia `false`.

### Výhody

- Vráti `true` iba vtedy, keď je vstup vyplnené pole a každý prvok je objekt.
- Skončí predčasne a vráti `false` hneď, ako sa nájde prvok, ktorý nie je objekt.
- Pomáha overiť neznámy vstup pred vykonaním operácií špecifických pre objekty.

## Použitie

### Syntax

Funkcia:

- `areObjects(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na prvky typu objekt.

### Lokálny import funkcie

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value je vyplnené pole objektov
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areObjects(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 00:10:17 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>