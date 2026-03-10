# isFalse

## Popis

`isFalse` kontroluje, či je daná hodnota striktne rovná booleovskému literálu `false`.

### Prípad použitia

Validujte neznáme dáta (napr. z JSON, parametrov dotazu alebo používateľského vstupu), kde sa má za platný príznak
považovať iba explicitná booleovská hodnota `false` a všetko ostatné sa má odmietnuť.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isFalse`, keď potrebujete akceptovať iba literál `false` a odmietnuť všetky ostatné nepravdivé (falsy)
> hodnoty; vráti `true` iba pre `value === false`.

### Výhody

- Poskytuje prísnu kontrolu booleovského literálu `false` bez konverzie typov.
- Pomáha odlíšiť `false` od iných nepravdivých (falsy) hodnôt, ako sú `0`, `""`, `null` a `undefined`.
- Zlepšuje čitateľnosť tým, že pri validácii neznámeho vstupu explicitne vyjadruje zámer.

## Použitie

### Syntax

Funkcia:

- `isFalse(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input je tu presne false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isFalse(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 16:44:25 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>