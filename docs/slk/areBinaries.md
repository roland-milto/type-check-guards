# areBinaries

## Popis

Skontroluje, či je poskytnutá hodnota neprázdne pole platných binárnych reťazcov, a vráti `true` iba vtedy, ak všetky
položky prejdú validáciou.

### Prípad použitia

Použite `areBinaries`, keď dostanete neznámy zoznam (napr. z JSON, formulárov alebo API) a potrebujete sa uistiť, že ide
o neprázdne pole binárnych reťazcov pred jeho parsovaním alebo spracovaním.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `areBinaries` na validáciu neznámeho vstupu pred konverziou binárnych reťazcov na čísla/BigInty; zabezpečí, že
> pole nie je prázdne a každý prvok je platný binárny reťazec.

### Výhody

- Overuje, že hodnota je neprázdne pole, v ktorom je každý prvok platný binárny reťazec.
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre guardy, predčasné návraty a validáciu vstupu.
- Predchádza následným chybám pri parsovaní tým, že odmieta polia, ktoré obsahujú akýkoľvek nebinárny záznam.

## Použitie

### Syntax

Funkcia:

- `areBinaries(array)`

Parametre:

- `array`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // pravda
console.log(areBinaries(b)); // nepravda
console.log(areBinaries([])); // nepravda
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areBinaries(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 23:15:52 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>