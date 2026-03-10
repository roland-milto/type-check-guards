# areHexadecimals

## Popis

Skontroluje, či sú všetky prvky v poli hexadecimálne reťazce, pričom vráti `true` iba pre neprázdne polia, kde je každá
položka platná.

### Prípad použitia

Použite `areHexadecimals` na overenie používateľského vstupu alebo externých údajov (napr. ID, kontrolné súčty, farebné
kódy bez úvodného '#') pred vykonaním hexadecimálneho parsovania alebo ďalšieho spracovania.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areHexadecimals` na overenie neznámeho vstupu pred parsovaním alebo konverziou hodnôt (napríklad pred
`parseInt(value, 16)` alebo konverziami na BigInt).

### Výhody

- Overuje, že každý prvok je hexadecimálny reťazec, a vráti `true` iba vtedy, keď sa zhodujú všetky položky.
- Zámerne odmieta prázdne polia a pri chýbajúcich vstupných údajoch vracia `false`.
- Poskytuje jednoduchý booleovský výsledok (`true`/`false`) vhodný pre guardy a validáciu s predčasným návratom.

## Použitie

### Syntax

Funkcia:

- `areHexadecimals(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať na prítomnosť hexadecimálnych reťazcových prvkov.

### Lokálny import funkcie

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areHexadecimals(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:07:49 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>