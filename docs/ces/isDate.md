# isDate

## Popis

`isDate` určuje, zda je poskytnutá hodnota `Date`; vrací `true` pro instance `Date` a jinak `false`.

### Případ použití

Validujte a zužujte neznámé hodnoty (např. data požadavků, hodnoty konfigurace nebo parsovaný JSON) před prováděním
operací s `Date`, jako je formátování, porovnávání nebo volání `toISOString()`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isDate` k zúžení typu `unknown` na `Date` za běhu; vrací `true` pouze pro skutečné instance `Date` (ne pro
> řetězce s datem).

### Výhody

- Poskytuje jednoduchou běhovou kontrolu pro ověření, zda je hodnota `Date`.
- Pomáhá předcházet typovým chybám tím, že zajistí, aby validací prošly pouze instance `Date`.
- Užitečné pro validaci neznámých vstupů (např. payloady API) před použitím metod specifických pro datum.

## Použití

### Syntaxe

Funkce:

- `isDate(value)`

Parametry:

- `value`: Hodnota, u které se má zkontrolovat typ `Date`.

### Lokální import funkce

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input je zde Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isDate(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isDate](../_analysis/isDate.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 15:36:49 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>