# isWeakSet

## Popis

Určuje, či je daná hodnota `value` `WeakSet` objektov.

### Prípad použitia

Použite `isWeakSet` pri prijímaní netypovaného vstupu (napr. z externých API, dynamickej konfigurácie alebo hodnôt typu
`unknown`), keď potrebujete overiť, že ide o `WeakSet` pred použitím operácií špecifických pre `WeakSet`.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isWeakSet` na zúženie hodnoty typu `unknown` na `WeakSet<object>` za behu; všimnite si, že `WeakSet` môže
> obsahovať iba referencie na objekty.

### Výhody

- Poskytuje jednoduchú kontrolu za behu, či je hodnota `WeakSet`.
- Pomáha predchádzať chybám typov tým, že zabezpečí, aby sa ako `WeakSet` spracúvali iba inštancie `WeakSet`.
- Funguje s akýmkoľvek vstupom typu `unknown` a vracia jasný booleovský výsledok (`true`/`false`).

## Použitie

### Syntax

Funkcia:

- `isWeakSet(value)`

Parametre:

- `value`: Hodnota, ktorá sa má skontrolovať.

### Lokálny import funkcie

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a je WeakSet za behu
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isWeakSet(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 14:19:06 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>