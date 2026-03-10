# isNumber

## Popis

`isNumber` kontroluje, zda je hodnota konečné číslo, které není `NaN`.

### Případ použití

Validujte číselný vstup z nedůvěryhodných zdrojů (formuláře, parametry dotazu, JSON payloady) před výpočty, uložením
nebo kontrolami rozsahu, aby prošla (`true`) pouze konečná čísla a vše ostatní vracelo `false`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isNumber` k validaci hodnot typu `unknown` před prováděním aritmetiky; odmítá `NaN`, `Infinity` a
`-Infinity`.

### Výhody

- Vrací `true` pouze pro skutečná JavaScriptová čísla (kontrola typu plus odmítnutí `NaN` a nekonečna).
- Předchází běžným validačním chybám, kdy `NaN`, `Infinity` nebo `-Infinity` omylem projdou jako čísla.
- Dobře funguje jako runtime guard pro neznámý vstup (např. JSON, uživatelský vstup, externí API).
- Jednoduché, rychlé a bez vedlejších účinků.

## Použití

### Syntaxe

Funkce:

- `isNumber(value)`

Parametry:

- `value`: Hodnota ke kontrole.

### Lokální import funkce

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // vstup je platné konečné číslo
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isNumber(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:08:27 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>