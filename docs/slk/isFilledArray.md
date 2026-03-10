# isFilledArray

## Popis

Kontroluje, či je `value` pole s aspoň jedným prvkom, a vráti `true` alebo `false`.

### Prípad použitia

Použite `isFilledArray` na validáciu prichádzajúcich dát (napr. payloady API, hodnoty formulárov, konfiguráciu) pred
iterovaním, prístupom k prvému prvku alebo aplikovaním logiky, ktorá vyžaduje aspoň jednu položku.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isFilledArray` je runtime guard, ktorý vracia booleovskú hodnotu; nezúžuje typy prvkov nad rámec potvrdenia, že pole
> nie je prázdne.

### Výhody

- Jednoduchá a rýchla kontrola neprázdneho poľa pomocou `Array.isArray` a kontroly dĺžky.
- Pomáha predchádzať chybám za behu, keď kód predpokladá, že pole má aspoň jeden prvok.
- Jasný booleovský výsledok: vráti `true` pre neprázdne polia a `false` v opačnom prípade.

## Použitie

### Syntax

Funkcia:

- `isFilledArray(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa kontroluje, či je neprázdnym poľom.

### Lokálny import funkcie

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input je za behu neprázdne pole
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isFilledArray(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 11:48:45 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>