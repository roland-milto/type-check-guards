# isSymbol

## Popis

`isSymbol` určuje, zda je daná hodnota typu `symbol`; pro symboly vrací `true` a jinak `false`.

### Případ použití

Ověřte, že hodnota typu `unknown` je `symbol`, než ji použijete jako jedinečný identifikátor, klíč registru nebo
vypočtený klíč vlastnosti v objektech a mapách.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isSymbol` ke zúžení `unknown` na `symbol` před voláním funkcí souvisejících se symboly nebo před použitím
> jako vypočteného klíče vlastnosti.

### Výhody

- Poskytuje jednoduchou a spolehlivou kontrolu za běhu pro primitivní typ JavaScriptu `symbol`.
- Pomáhá zúžit hodnoty typu `unknown` před použitím API specifických pro symboly nebo před jejich uložením jako klíčů.
- Vyhýbá se falešně pozitivním výsledkům použitím `typeof`, což je kanonický způsob detekce hodnot typu `symbol`.

## Použití

### Syntaxe

Funkce:

- `isSymbol(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input je zde symbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isSymbol(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:26:15 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>