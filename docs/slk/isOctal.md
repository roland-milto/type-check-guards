# isOctal

## Popis

Určuje, či je hodnota platný reťazec osmičkového literálu (napr. `0o755`).

### Prípad použitia

Overte používateľský vstup alebo konfiguračné hodnoty, ktoré musia byť vyjadrené ako reťazec osmičkového literálu (
napríklad režimy oprávnení súborov ako `0o644`), pred ich parsovaním alebo konverziou.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isOctal` je typový strážca (`value is string`). Po výsledku `true` TypeScript zúži kontrolovanú premennú na `string`.

### Výhody

- Poskytuje prísny typový strážca: vráti `true` iba vtedy, keď je vstup reťazec, ktorý zodpovedá formátu osmičkového
  literálu.
- Odmieta prázdne reťazce a reťazce s úvodnými/koncovými bielymi znakmi (ASCII riadiace znaky/medzera), čím znižuje
  náhodné zhody.
- Podporuje voliteľné znamienko a pre prefix `0o`/`0O` nerozlišuje veľkosť písmen.
- Je tolerantný k nevstupom typu reťazec tým, že vráti `false` namiesto vyhodenia výnimky.

## Použitie

### Syntax

Funkcia:

- `isOctal(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // pravda
console.log(isOctal(b)); // pravda
console.log(isOctal(c)); // nepravda
console.log(isOctal(d)); // nepravda

if (isOctal(a)) {
  // a je tu reťazec
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isOctal(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 15:43:17 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>