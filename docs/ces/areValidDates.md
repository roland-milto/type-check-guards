# areValidDates

## Popis

Určuje, zda je pole neprázdné a skládá se výhradně z platných objektů `Date`.

### Případ použití

Použijte `areValidDates` k validaci polí poskytnutých uživatelem nebo API před prováděním operací založených na datech (
řazení, kontroly rozsahu, formátování), aby bylo zajištěno, že všechny položky jsou skutečné, platné objekty `Date` a že
seznam není prázdný.

> **Poznámka pro uživatele TypeScriptu:**
>
> `areValidDates` vrací `false` pro prázdné pole; předtím, než se na něj budete spoléhat jako na validační krok, se
> ujistěte, že pole má být neprázdné.

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek platnou instancí `Date` (žádná neplatná data jako
  `new Date('invalid')`).
- Odmítá prázdný vstup vrácením `false`, čímž zajišťuje, že přijmete pouze smysluplné, neprázdné seznamy dat.
- Poskytuje jednoduchou booleovskou kontrolu ve stylu guard, kterou lze snadno kombinovat s dalšími validacemi.

## Použití

### Syntaxe

Funkce:

- `areValidDates(array)`

Parametry:

- `array`: Pole ke kontrole, které může obsahovat objekty `Date`.

### Lokální import funkce

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // pravda
console.log(areValidDates(b)); // nepravda
console.log(areValidDates(c)); // nepravda
console.log(areValidDates(d)); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areValidDates(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:31:05 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>