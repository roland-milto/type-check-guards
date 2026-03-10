# isArray

## Popis

`isArray` kontroluje, zda je daná hodnota pole, a vrátí `true`, pokud ano, jinak `false`.

### Případ použití

Validujte neznámá data (např. parsovaný JSON nebo odpovědi API), abyste zajistili, že hodnota je pole, před iterací,
indexováním nebo přístupem k `.length`.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isArray` použijte, když potřebujete běhovou kontrolu polí; vrací boolean a je bezpečné ji volat s hodnotami typu
`unknown`.

### Výhody

- Používá vestavěnou funkci `Array.isArray` pro spolehlivou detekci polí napříč realmami (např. iframy).
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a větvící logiku.
- Funguje s jakýmkoli vstupním typem, protože parametr je `unknown`.

## Použití

### Syntaxe

Funkce:

- `isArray(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input je za běhu pole
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isArray(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isArray](../_analysis/isArray.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 11:29:54 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>