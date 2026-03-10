# isNull

## Popis

Určuje, či je poskytnutá hodnota `value` rovná `null`.

### Prípad použitia

Použite `isNull` na validáciu vstupov alebo polí payloadu API, kde je `null` zmysluplná sentinelová hodnota a musí sa
spracovať inak než `undefined` alebo iné hodnoty.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isNull`, keď potrebujete rozlíšiť `null` od `undefined` a iných nepravdivých (falsy) hodnôt; vráti `true` iba
> pre `null`.

### Výhody

- Poskytuje presnú kontrolu na `null` bez toho, aby ho zamieňal s `undefined`.
- Funguje spoľahlivo pre akýkoľvek typ vstupu, pretože prijíma `unknown`.
- Jednoduché, rýchle a bez vedľajších účinkov; vracia iba `true` alebo `false`.

## Použitie

### Syntax

Funkcia:

- `isNull(value)`

Parametre:

- `value`: Hodnota, ktorú treba skontrolovať na `null`.

### Lokálny import funkcie

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // pravda
console.log(isNull(b)); // nepravda

if (isNull(a)) {
  // a je tu null
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isNull(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isNull](../_analysis/isNull.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 15:40:43 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>