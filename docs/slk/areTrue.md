# areTrue

## Popis

Kontroluje, či neprázdne pole obsahuje iba booleovské hodnoty `true`.

### Prípad použitia

Použite `areTrue` na overenie, že sú splnené všetky predpoklady alebo že sú všetky feature flagy zapnuté (všetky hodnoty
sú `true`) pred pokračovaním, pričom prázdne alebo chybne vytvorené vstupy sa považujú za nesplnené (`false`).

> **Poznámka pre používateľov TypeScriptu:**
>
> `areTrue` vracia `false` pre prázdne pole a pre polia obsahujúce akúkoľvek hodnotu, ktorá nie je striktne `true`.

### Výhody

- Vráti `true` iba vtedy, keď je každý prvok striktne `true` a pole nie je prázdne.
- Rýchlo zlyhá: vráti `false` hneď, ako sa nájde hodnota, ktorá nie je `true`.
- Odmieta neplatné vstupy (nie polia alebo prázdne polia) vrátením `false`.

## Použitie

### Syntax

Funkcia:

- `areTrue(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať, či obsahuje samé hodnoty `true`.

### Lokálny import funkcie

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.areTrue(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 13:52:41 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>