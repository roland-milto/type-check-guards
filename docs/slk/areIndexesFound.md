# areIndexesFound

## Popis

`areIndexesFound` kontroluje, či je hodnota neprázdne pole, ktorého prvky sú všetky platné indexy; vráti `true`, ak áno,
inak `false`.

### Prípad použitia

Overte používateľom poskytnuté alebo externé dáta (napr. parsované JSON), od ktorých sa očakáva, že budú zoznamom
indexov, predtým než ich použijete na prístup k poliam alebo na ich výrez.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areIndexesFound` na overenie neznámeho vstupu predtým, než budete jeho prvky považovať za indexy poľa; pre
> prázdne polia a pre polia obsahujúce neindexové hodnoty vráti `false`.

### Výhody

- Vráti `true` iba vtedy, keď je vstup vyplnené pole a každý prvok je platný index.
- Zlyhá rýchlo: vráti `false` hneď, ako narazí na prvok, ktorý nie je indexom.
- Užitočné ako ochrana pred použitím hodnôt ako pozícií v poli alebo offsetov.

## Použitie

### Syntax

Funkcia:

- `areIndexesFound(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať z hľadiska zhody s indexmi.

### Lokálny import funkcie

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // pravda
console.log(areIndexesFound(b)); // nepravda
console.log(areIndexesFound(c)); // nepravda

if (areIndexesFound(a)) {
  // Tu je `a` potvrdené ako vyplnené pole indexov.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areIndexesFound(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 01:04:07 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>