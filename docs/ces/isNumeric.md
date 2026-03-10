# isNumeric

## Popis

`isNumeric` určuje, zda je daná `value` považována za číselnou, a to porovnáním jejího vyhodnoceného typu s
`NUMERIC_TYPES`.

### Případ použití

Použijte `isNumeric` k validaci vstupů (např. payloady API, hodnoty formulářů, konfigurace) před prováděním číselných
operací a ke konzistentnímu přijímání číselně podobných typů (například `BigInt`) podle `NUMERIC_TYPES`.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isNumeric` je predikát vracející booleovskou hodnotu; berte jej jako běhovou kontrolu, zda hodnota patří do knihovnou
> definované množiny číselných typů.

### Výhody

- Používá `getTypeOf` spolu s `NUMERIC_TYPES` k centralizaci logiky detekce číselných typů a k udržení konzistentních
  kontrol napříč kódovou základnou.
- Vrací jednoduchou booleovskou hodnotu (`true`/`false`) pro snadné větvení a použití ve stylu guard.
- Podporuje více číselných reprezentací (např. `number`, `BigInt`) podle definice v `NUMERIC_TYPES`.

## Použití

### Syntaxe

Funkce:

- `isNumeric(value)`

Parametry:

- `value`: Hodnota, u které se má ověřit, zda je číselného typu.

### Lokální import funkce

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v je podle typových pravidel knihovny považováno za číselné
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isNumeric(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 15:51:59 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>