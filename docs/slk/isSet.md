# isSet

## Popis

Určuje, či je daná hodnota `Set`.

### Prípad použitia

Validujte vstupy z externých zdrojov (napr. parsovanie JSON, používateľský vstup alebo API tretích strán), aby ste sa
uistili, že hodnota je `Set` pred vykonávaním operácií so `Set`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isSet` na zúženie hodnôt typu `unknown` pred volaním API špecifických pre `Set`, ako sú `.add`, `.has` alebo
`.size`.

### Výhody

- Poskytuje jednoduchú kontrolu za behu na potvrdenie, či je hodnota `Set`.
- Pomáha predchádzať chybám typov tým, že umožňuje skoré vetvenie, keď hodnota nie je `Set`.
- Funguje s akýmkoľvek obsahom `Set` (prázdnym alebo naplneným) a konzistentne vracia `true`/`false`.

## Použitie

### Syntax

Funkcia:

- `isSet(value)`

Parametre:

- `value`: Hodnota na kontrolu.

### Lokálny import funkcie

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a je za behu Set
  console.log(a.size);
}

console.log(isSet(b)); // nepravda

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isSet(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isSet](../_analysis/isSet.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 23:11:08 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>