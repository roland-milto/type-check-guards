# isTrue

## Popis

`isTrue` určuje, zda je daná hodnota striktně rovna `true`.

### Případ použití

`isTrue` použijte k validaci příznaků, přepínačů funkcí (feature toggles) nebo konfiguračních hodnot, kde má být
přijímán pouze literál `true` a vše ostatní musí být považováno za `false`.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isTrue` použijte, když potřebujete přijmout pouze booleovský literál `true`, nikoli jen pravdivé (truthy) hodnoty.

### Výhody

- Poskytuje striktní kontrolu booleovského literálu `true` (bez konverze typů).
- Pomáhá odlišit `true` od pravdivých (truthy) hodnot, jako jsou `1`, `"true"` nebo `{}`.
- Jednoduché, předvídatelné chování vhodné pro guardy a validační pipeline.

## Použití

### Syntaxe

Funkce:

- `isTrue(value)`

Parametry:

- `value`: Hodnota ke kontrole.

### Lokální import funkce

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // pravda
const b = isTrue(1);         // nepravda
const c = isTrue("true");   // nepravda

if (isTrue(a)) {
  // a je zde pravda
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isTrue(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:41:51 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>