# areBooleans

## Popis

`areBooleans` kontroluje, či dané neprázdne pole obsahuje iba boolean hodnoty; vráti `true`, ak áno, inak vráti `false`.

### Prípad použitia

Overte používateľom poskytnuté alebo externé dáta (napr. JSON payloady, parametre dotazu, konfiguračné polia), aby ste
sa uistili, že neprázdny zoznam obsahuje iba booleany, pred aplikovaním boolean logiky alebo odovzdaním do API, ktoré
očakáva `boolean[]`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areBooleans` na overenie `unknown[]` predtým, než ho budete považovať za `boolean[]`; pre prázdne polia
> vracia `false`, takže tento prípad výslovne ošetrite, ak má byť prázdny zoznam povolený.

### Výhody

- Vráti `true` iba vtedy, keď je každý prvok boolean a vstup je neprázdne pole.
- Zabraňuje falošne pozitívnym výsledkom tým, že odmieta prázdne polia (vracia `false`).
- Dobre funguje ako runtime guard pred operáciami určenými len pre booleany (napr. `every`, `some`, logické redukcie).

## Použitie

### Syntax

Funkcia:

- `areBooleans(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na boolean prvky.

### Lokálny import funkcie

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areBooleans(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:42:15 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>