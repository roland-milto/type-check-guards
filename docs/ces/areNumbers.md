# areNumbers

## Popis

`areNumbers` kontroluje, zda je hodnota neprázdné pole, ve kterém jsou všechny prvky čísla.

### Případ použití

Ověřte data poskytnutá uživatelem nebo API, abyste zajistili, že jde o neprázdné pole čísel před výpočtem součtů,
průměrů nebo jiných číselných agregací.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areNumbers` k ověření neznámých polí před prováděním číselných výpočtů; vrací `false` pro prázdná pole a pro
> pole obsahující jakoukoli nečíselnou hodnotu.

### Výhody

- Vrací `true` pouze tehdy, když je vstup neprázdné pole a každý prvek je číslo.
- Zabraňuje falešně pozitivním výsledkům tím, že odmítá prázdná pole a vstupy, které nejsou polem.
- Užitečné jako ochranná kontrola před číselnými operacemi (např. sčítání, průměrování), aby se předešlo chybám za běhu.

## Použití

### Syntaxe

Funkce:

- `areNumbers(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, že obsahuje číselné prvky.

### Lokální import funkce

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areNumbers(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:03:45 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>