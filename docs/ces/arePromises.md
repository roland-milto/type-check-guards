# arePromises

## Popis

`arePromises` určuje, zda jsou všechny prvky v poli instancemi `Promise`.

### Případ použití

Ověřte, že dynamicky sestavený nebo externě poskytnutý seznam obsahuje pouze promisy, než je budete agregovat (např.
pomocí `Promise.all`).

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `arePromises` k ověření `unknown[]` před voláním `Promise.all` nebo jiných operací určených pouze pro
> promisy; pro prázdná pole vrací `false`.

### Výhody

- Zajišťuje, že každý prvek je `Promise`, než budete pokračovat logikou specifickou pro promisy.
- Vrací `false` pro nevyplněná pole, čímž zabraňuje nejednoznačným výsledkům u prázdných vstupů.
- Užitečné jako runtime ochrana při práci s `unknown[]` z externích zdrojů.

## Použití

### Syntaxe

Funkce:

- `arePromises(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, zda obsahuje instance Promise.

### Lokální import funkce

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values je za běhu pole instancí Promise
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.arePromises(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:47:44 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>