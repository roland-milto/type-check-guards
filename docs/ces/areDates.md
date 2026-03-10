# areDates

## Popis

`areDates` určuje, zda je dané pole naplněné a obsahuje pouze objekty `Date`, přičemž vrací `true` pouze tehdy, když
jsou všechny prvky platná data.

### Případ použití

Použijte `areDates` k ověření neznámého vstupu (např. parsované JSON, data z formuláře, payloady z API) před spuštěním
logiky specifické pro datum, jako je řazení podle času, formátování nebo výpočet rozsahů.

> **Poznámka pro uživatele TypeScriptu:**
>
> Vrací `true` pouze pro neprázdná pole, kde je každý prvek `Date`; prázdná pole vracejí `false`.

### Výhody

- Zajišťuje, že pole není prázdné před ověřením jeho obsahu, čímž zabraňuje výsledku `true` pro prázdné vstupy.
- Ověřuje, že každý prvek je instancí `Date`, a při první neshodě okamžitě vrací `false`.
- Užitečné jako kontrola ve stylu guard před prováděním operací specifických pro datum nad položkami pole.

## Použití

### Syntaxe

Funkce:

- `areDates(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, zda obsahuje objekty `Date`.

### Lokální import funkce

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // pravda
console.log(areDates(b)); // nepravda
console.log(areDates(c)); // nepravda

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areDates(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areDates](../_analysis/areDates.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 15:29:42 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>