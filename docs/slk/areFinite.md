# areFinite

## Popis

`areFinite` kontroluje, či je hodnota neprázdne pole, ktorého prvky sú všetky konečné čísla; ak áno, vráti `true`, inak
`false`.

### Prípad použitia

Validujte polia číselných vstupov (napr. dátové série grafov, zoznamy súradníc, vzorky meraní) pred vykonaním výpočtov,
aby bol výsledok `true` iba vtedy, keď sú všetky hodnoty konečné čísla.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areFinite`, keď potrebujete zabezpečiť, že pole je neprázdne a obsahuje iba konečné čísla; pre prázdne polia
> a pre polia obsahujúce `NaN` alebo nekonečná vráti `false`.

### Výhody

- Vráti `true` iba vtedy, keď je vstup neprázdne pole a každý prvok je konečné číslo.
- Odmieta `Infinity`, `-Infinity` a `NaN` tým, že sa spolieha na kontroly `isFinite` pre každý prvok.
- Poskytuje jednoduchý booleovský výsledok (`true`/`false`) vhodný pre guardy a validačné toky.

## Použitie

### Syntax

Funkcia:

- `areFinite(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať z hľadiska konečnosti všetkých jeho prvkov.

### Lokálny import funkcie

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // pravda
console.log(areFinite(b)); // nepravda
console.log(areFinite(c)); // nepravda

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areFinite(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 16:37:01 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>