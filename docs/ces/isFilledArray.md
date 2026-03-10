# isFilledArray

## Popis

Kontroluje, zda je `value` pole s alespoň jedním prvkem, a vrací `true` nebo `false`.

### Případ použití

Použijte `isFilledArray` k ověření příchozích dat (např. payloadů API, hodnot formulářů, konfigurace) před iterací,
přístupem k prvnímu prvku nebo použitím logiky, která vyžaduje alespoň jednu položku.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isFilledArray` je runtime guard, který vrací booleovskou hodnotu; nezpřesňuje typy prvků nad rámec potvrzení, že pole
> není prázdné.

### Výhody

- Jednoduchá a rychlá kontrola neprázdného pole pomocí `Array.isArray` a kontroly délky.
- Pomáhá předcházet chybám za běhu, když kód předpokládá, že pole má alespoň jeden prvek.
- Jasný booleovský výsledek: vrací `true` pro neprázdná pole a `false` v opačném případě.

## Použití

### Syntaxe

Funkce:

- `isFilledArray(value)`

Parametry:

- `value`: Hodnota, u které se kontroluje, zda je neprázdným polem.

### Lokální import funkce

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input je za běhu neprázdné pole
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isFilledArray(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 11:46:34 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>