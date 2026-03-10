# isBuffer

## Popis

Skontroluje, či je hodnota Node.js `Buffer`, a vráti `true` alebo `false`.

### Prípad použitia

Validujte vstupy za behu (napr. payloady API, údaje zo súborov alebo buffery správ), aby ste pred spracovaním overili,
že hodnota je `Buffer`, a spoľahlivo získali `false` pri spustení mimo Node.js, kde `Buffer` nemusí existovať.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `isBuffer` na zúženie hodnôt typu `unknown` na `Buffer` pred volaním metód špecifických pre Buffer.

### Výhody

- Bezpečne deteguje inštancie Node.js `Buffer` pomocou `Buffer.isBuffer`.
- Vracia `false` v prostrediach, kde `Buffer` nie je dostupný, čím sa predchádza chybám za behu.
- Funguje so vstupom typu `unknown`, vďaka čomu je vhodný na validáciu za behu a zúženie typu.

## Použitie

### Syntax

Funkcia:

- `isBuffer(value)`

Parametre:

- `value`: Hodnota, ktorá sa má otestovať.

### Lokálny import funkcie

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // pravda
console.log(isBuffer(b)); // nepravda

if (isBuffer(a)) {
  // a je tu Buffer
  console.log(a.toString("utf8"));
}
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isBuffer(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 16:33:09 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>