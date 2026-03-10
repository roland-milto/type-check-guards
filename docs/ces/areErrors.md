# areErrors

## Popis

Kontroluje, zda je pole neprázdné a obsahuje pouze objekty `Error`, a vrací `true` nebo `false`.

### Případ použití

Ověřte, že za běhu poskytnuté `unknown[]` (např. agregovaná selhání, výsledky validace nebo deserializovaná data) je
neprázdný seznam objektů `Error` před iterací, logováním nebo opětovným vyhozením.

> **Poznámka pro uživatele TypeScriptu:**
>
> `areErrors` vrací `true` pouze pro naplněné pole, kde je každá položka `Error`; vrací `false` pro prázdné pole nebo
> pokud některý prvek není `Error`.

### Výhody

- Zajišťuje, že každý prvek je instancí `Error`, což umožňuje bezpečné zpracování chyb a logování.
- Odmítá prázdná pole, čímž brání tomu, aby byly náhodné stavy „žádné chyby“ považovány za platné seznamy chyb.
- Dobře funguje jako runtime guard při práci se vstupy `unknown[]` (např. z API nebo z bloků `catch`).

## Použití

### Syntaxe

Funkce:

- `areErrors(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat na objekty `Error`.

### Lokální import funkce

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // hodnota je neprázdné pole objektů Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areErrors(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 12:33:01 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>