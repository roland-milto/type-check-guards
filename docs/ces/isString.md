# isString

## Popis

`isString` určuje, zda je daná hodnota řetězec.

### Případ použití

Ověřujte uživatelský vstup, pole payloadu API nebo konfigurační hodnoty za běhu, abyste zajistili, že hodnota je
řetězec, před použitím řetězcových operací (např. ořezávání, dělení, převod velikosti písmen).

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isString` k ověření hodnot typu `unknown` nebo volně typovaných hodnot před voláním řetězcových metod; vrací
`true` pouze tehdy, když `typeof value === "string"`.

### Výhody

- Jednoduchá a rychlá kontrola pomocí `typeof`.
- Vrací předvídatelný booleovský výsledek: `true` pro řetězce, jinak `false`.
- Funguje pro prázdné i neprázdné řetězce.
- Užitečné jako lehká runtime ochrana před prováděním operací specifických pro řetězce.

## Použití

### Syntaxe

Funkce:

- `isString(value)`

Parametry:

- `value`: Hodnota, která má být otestována, zda je typu řetězec.

### Lokální import funkce

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input je zde řetězec
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isString(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isString](../_analysis/isString.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:13:29 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>