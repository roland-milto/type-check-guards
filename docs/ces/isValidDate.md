# isValidDate

## Popis

`isValidDate` kontroluje, zda je daná hodnota platný objekt `Date`, a vrací `true` pouze pro skutečná, ne-neplatná data.

### Případ použití

Validujte uživatelský vstup nebo data z API, která mohou obsahovat data, a zajistěte, že hodnota je skutečná instance
`Date`, a ne neplatné datum, před prováděním výpočtů s daty, formátování nebo porovnávání.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isValidDate` před voláním metod `Date` (např. `toISOString`, `getTime`) na hodnotách typovaných jako
`unknown`, abyste zajistili, že jde o platné objekty `Date`.

### Výhody

- Zajišťuje, že hodnota je instancí `Date`, a ne pouze řetězec nebo číslo připomínající datum.
- Odmítá neplatná data (např. `new Date("invalid")`) kontrolou časových hodnot `NaN`.
- Jednoduchá booleovská ochrana, která se snadno používá v podmínkách a validačních pipelinech.
- Pomáhá předcházet chybám za běhu při volání metod data tím, že nejprve ověří vstup.

## Použití

### Syntaxe

Funkce:

- `isValidDate(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input je platná instance Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isValidDate(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 16:39:15 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>