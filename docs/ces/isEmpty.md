# isEmpty

## Popis

Určuje, zda je daná hodnota prázdná; vrací `true` pro `null`, `undefined`, prázdné/jen bílé znaky obsahující řetězce,
prázdná pole, prázdné `Map`/`Set` nebo objekty bez vlastních vyjmenovatelných vlastností.

### Případ použití

Použijte `isEmpty` k validaci vstupů a detekci chybějících/prázdných hodnot napříč více datovými typy (např. pole
formuláře, payloady API, konfigurační objekty), kde mají být `null`, `undefined`, řetězce s bílými znaky, prázdné
kolekce a objekty bez vlastností považovány za prázdné.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isEmpty` je utilita vracející boolean (nejde o TypeScript type predicate), takže sama o sobě nezúžuje typy;
> používejte ji pro validaci/větvení spíše než pro zúžení při kompilaci.

### Výhody

- Považuje `null` a `undefined` za `true` při kontrolách prázdnosti.
- Považuje řetězce obsahující pouze bílé znaky za prázdné tím, že je před kontrolou délky ořízne.
- Podporuje běžné kontejnerové typy (pole, `Map`, `Set`) a prosté objekty bez vlastních vyjmenovatelných vlastností.
- Vyhne se započítávání zděděných vlastností použitím kontrol `hasOwnProperty`.
- Vrací jednoduchý booleovský výsledek (`true`/`false`) vhodný pro guardy a validaci.

## Použití

### Syntaxe

Funkce:

- `isEmpty(value)`

Parametry:

- `value`: Hodnota, u které se má zkontrolovat prázdnost.

### Lokální import funkce

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isEmpty(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 16:17:45 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>