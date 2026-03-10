# areNumerics

## Popis

`areNumerics` kontroluje, či je hodnota neprázdne pole, v ktorom sú všetky prvky číselné.

### Prípad použitia

Použite `areNumerics` na overenie externých alebo netypovaných dát (napr. JSON payloady, parametre dotazu, vstup z
formulára) pred výpočtom súčtov, priemerov alebo iných číselných operácií, čím zabezpečíte, že vstup je neprázdne
číselné pole; inak vráti `false`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areNumerics` ako stráž (guard) pre vstup typu `unknown` predtým, než ho budete považovať za číselné pole; pre
> nepolia a prázdne polia vracia `false`.

### Výhody

- Vráti `true` iba vtedy, keď je vstup neprázdne pole a každý prvok je číselný.
- Zlyhá rýchlo: prestane kontrolovať hneď, ako nájde nečíselný prvok, a vráti `false`.
- Pomáha bezpečne overiť neznámy vstup pred vykonávaním číselných operácií.

## Použitie

### Syntax

Funkcia:

- `areNumerics(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na číselné prvky.

### Lokálny import funkcie

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // pravda
console.log(areNumerics(b)); // pravda
console.log(areNumerics(c)); // nepravda
console.log(areNumerics(d)); // nepravda
console.log(areNumerics(e)); // nepravda

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areNumerics(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 16:07:18 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>