# areBinaries

## Popis

Kontroluje, zda je poskytnutá hodnota neprázdné pole platných binárních řetězců, a vrátí `true` pouze tehdy, pokud
všechny položky projdou validací.

### Případ použití

Použijte `areBinaries`, když obdržíte neznámý seznam (např. z JSONu, formulářů nebo API) a potřebujete zajistit, že jde
o neprázdné pole binárních řetězců před jeho parsováním nebo zpracováním.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areBinaries` k ověření neznámého vstupu před převodem binárních řetězců na čísla/BigInty; zajišťuje, že pole
> není prázdné a každý prvek je platný binární řetězec.

### Výhody

- Ověřuje, že hodnota je neprázdné pole, ve kterém je každý prvek platný binární řetězec.
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro stráže, předčasné návraty a validaci vstupu.
- Zabraňuje následným chybám při parsování tím, že odmítá pole, která obsahují jakoukoli nebinární položku.

## Použití

### Syntaxe

Funkce:

- `areBinaries(array)`

Parametry:

- `array`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // pravda
console.log(areBinaries(b)); // nepravda
console.log(areBinaries([])); // nepravda
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areBinaries(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:14:02 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>