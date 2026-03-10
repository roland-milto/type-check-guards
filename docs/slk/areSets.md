# areSets

## Popis

Kontroluje, či dané neprázdne pole obsahuje iba inštancie `Set`; vráti `true`, ak áno, inak `false`.

### Prípad použitia

Overte, že hodnota (napr. zo vstupu používateľa, parsovania JSON alebo externých API) je neprázdne pole objektov `Set`
pred spracovaním každej množiny.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areSets` na overenie neznámeho vstupu pred iterovaním a volaním API `Set` (napr. `.size`, `.has`, `.add`) na
> každom prvku.

### Výhody

- Vráti `true` iba vtedy, keď je vstup neprázdne pole a každý prvok je inštanciou `Set`.
- Zabraňuje falošne pozitívnym výsledkom pri prázdnych poliach tým, že vráti `false`, keď pole neobsahuje žiadne prvky.
- Užitočné ako runtime ochrana pred vykonaním operácií špecifických pre `Set` na každom prvku.

## Použitie

### Syntax

Funkcia:

- `areSets(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na inštancie `Set`.

### Lokálny import funkcie

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a je za behu pole inštancií Set
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // nepravda
console.log(areSets(c)); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areSets(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areSets](../_analysis/areSets.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:15:14 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>