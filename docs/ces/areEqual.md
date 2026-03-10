# areEqual

## Popis

`areEqual` kontroluje, zda jsou všechny prvky v poli rovny dané očekávané hodnotě, a vrací `true` pouze pro neprázdná
pole, kde každá položka odpovídá.

### Případ použití

Ověřte, že seznam obsahuje pouze jednu povolenou hodnotu (např. všechny příznaky stavu jsou `true`, všechny role jsou
`"admin"` nebo všechny číselné položky se rovnají požadované konstantě) a zároveň považujte prázdný vstup za neplatný (
`false`).

> **Poznámka pro uživatele TypeScriptu:**
>
> `areEqual` použijte, když potřebujete striktní kontrolu všech položek; vrací `false` pro prázdná pole a pro jakýkoli
> vstup, který není polem nebo není naplněný.

### Výhody

- Vrací `true` pouze tehdy, když každý prvek odpovídá očekávané hodnotě; jinak vrací `false`.
- Rychlé selhání: přestane kontrolovat, jakmile je nalezen neodpovídající prvek.
- Chrání před neplatným vstupem tím, že vrací `false`, když vstup není naplněné pole.

## Použití

### Syntaxe

Funkce:

- `areEqual(value, expected)`

Parametry:

- `value`: Pole, které má být zkontrolováno.
- `expected`: Prvek, vůči kterému se porovnává každá položka pole.

### Lokální import funkce

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areEqual(value, expected)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:49:55 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>