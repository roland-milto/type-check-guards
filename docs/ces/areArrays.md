# areArrays

## Popis

`areArrays` určuje, zda je hodnota vyplněné dvourozměrné pole, jehož položky jsou všechny pole.

### Případ použití

Použijte `areArrays` k ověření tabulkových nebo maticových vstupů (např. řádky CSV, data mřížky nebo seskupené seznamy)
před prováděním operací s řádky/sloupci; vrátí `false`, pokud vstup není pole, je prázdný nebo obsahuje jakýkoli prvek,
který není pole.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areArrays`, když potřebujete zajistit, že hodnota je neprázdné 2D pole a že každý řádek je pole, před
> iterací nebo indexováním do vnořených polí.

### Výhody

- Ověřuje, že vstup je neprázdné dvourozměrné pole, kde každý prvek je pole.
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro stráže a předčasné ukončení.
- Pomáhá předcházet chybám za běhu, když pozdější kód předpokládá operace s vnořenými poli (např. mapování řádků).

## Použití

### Syntaxe

Funkce:

- `areArrays(array)`

Parametry:

- `array`: Vstup, který má být zkontrolován.

### Lokální import funkce

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value je 2D pole s poli jako prvky
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areArrays(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 13:38:59 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>