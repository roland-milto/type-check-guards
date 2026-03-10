# areOneOfType

## Popis

`areOneOfType` kontroluje, zda jsou všechny prvky v neprázdném poli jedním ze zadaných běhových typů.

### Případ použití

Validujte příchozí data (např. parsované JSON), kde pole musí být neprázdné a jeho položky jsou omezené na známou sadu
primitivních typů; vraťte `false`, když je pole prázdné nebo obsahuje jakýkoli nepovolený typ.

> **Poznámka pro uživatele TypeScriptu:**
>
> Tato funkce vrací boolean a nezúžuje typy prvků pole v čase kompilace; použijte ji jako krok běhové validace před
> dalším zpracováním.

### Výhody

- Zajišťuje, že každý prvek v poli odpovídá alespoň jednomu povolenému běhovému typu, a vrací `true` pouze tehdy, když
  projde celé pole.
- Odmítá neplatné vstupy včas: vrací `false`, když je `array` nebo `types` prázdné nebo nejde o vyplněné pole.
- Užitečné pro validaci kolekcí se smíšenými typy (např. čísla a řetězce) jedním voláním `areOneOfType`.

## Použití

### Syntaxe

Funkce:

- `areOneOfType(array, types)`

Parametry:

- `array`: Pole prvků, které se mají ověřit vůči poskytnutým typům.
- `types`: Pole řetězců reprezentujících datové typy, vůči nimž se má kontrolovat.

### Lokální import funkce

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areOneOfType(array, types)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 23:36:18 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>