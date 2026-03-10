# isDecimal

## Popis

`isDecimal` kontroluje, či je hodnota desiatkovou reťazcovou reprezentáciou bez úvodných/koncových bielych znakov a s
platným desiatkovým formátom.

### Prípad použitia

Validujte polia formulárov, API payloady alebo konfiguračné hodnoty, ktoré musia byť poskytnuté ako desiatkový reťazec (
voliteľne so znamienkom) bez akýchkoľvek okolitých bielych znakov, pred ich parsovaním alebo uložením.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isDecimal` na validáciu používateľského vstupu pred jeho konverziou (napr. pomocou `Number(value)`), najmä
> keď je potrebné odmietnuť biele znaky.

### Výhody

- Prísne overuje, že vstup je reťazec a zodpovedá vzoru desiatkového literálu.
- Odmieta úvodné a koncové biele znaky (vrátane riadiacich znakov), aby sa predišlo nejednoznačnému parsovaniu.
- Rýchle predbežné kontroly (kontrola typu a prvého/posledného znaku) pred spustením regexu.
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre stráže a validáciu vstupu.

## Použitie

### Syntax

Funkcia:

- `isDecimal(value)`

Parametre:

- `value`: Hodnota, ktorú treba skontrolovať z hľadiska formátu desiatkového reťazca.

### Lokálny import funkcie

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v je tu reťazec (overené za behu)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isDecimal(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 15:54:28 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>