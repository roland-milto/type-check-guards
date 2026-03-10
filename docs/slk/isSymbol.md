# isSymbol

## Popis

`isSymbol` určuje, či je daná hodnota typu `symbol`, pričom vracia `true` pre symboly a `false` v opačnom prípade.

### Prípad použitia

Overte, že hodnota typu `unknown` je `symbol`, predtým než ju použijete ako jedinečný identifikátor, kľúč registra alebo
vypočítaný kľúč vlastnosti v objektoch a mapách.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isSymbol` na zúženie `unknown` na `symbol` pred volaním funkcií súvisiacich so symbolmi alebo pred použitím
> ako vypočítaného kľúča vlastnosti.

### Výhody

- Poskytuje jednoduchú a spoľahlivú kontrolu za behu pre primitívny typ JavaScriptu `symbol`.
- Pomáha zúžiť hodnoty typu `unknown` pred použitím API špecifických pre symboly alebo pred ich uložením ako kľúčov.
- Predchádza falošne pozitívnym výsledkom použitím `typeof`, čo je kanonický spôsob detekcie hodnôt typu `symbol`.

## Použitie

### Syntax

Funkcia:

- `isSymbol(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input je tu symbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isSymbol(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:28:36 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>