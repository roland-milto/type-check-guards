# arePlainObjects

## Popis

Kontroluje, či sú všetky prvky poľa obyčajné objekty, pričom vráti `true` iba vtedy, ak každý prvok spĺňa podmienky.

### Prípad použitia

Overte externé alebo netypované údaje (napr. parsované JSON, payloady API, odoslania formulárov), aby ste sa uistili, že
ste dostali neprázdne pole, v ktorom je každý záznam obyčajný objekt, predtým než budete iterovať a čítať vlastnosti.

> **Poznámka pre používateľov TypeScriptu:**
>
> Použite `arePlainObjects` na overenie neznámeho vstupu predtým, než s ním budete v TypeScripte pracovať ako s
`Record<string, unknown>[]` (alebo s prísnejším tvarom objektu).

### Výhody

- Zabezpečuje, že každý prvok vo vstupnom poli je obyčajný objekt, pričom vráti `true` iba vtedy, keď všetky položky
  vyhovujú.
- Včas odmieta neplatné vstupy (nie polia alebo prázdne polia) vrátením `false`.
- Považuje za platné obyčajné objekty aj objekty vytvorené pomocou objektového literálu, aj objekty
  `Object.create(null)`.

## Použitie

### Syntax

Funkcia:

- `arePlainObjects(array)`

Parametre:

- `array`: Pole, ktoré sa má skontrolovať, či obsahuje prvky typu obyčajný objekt.

### Lokálny import funkcie

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // pravda
const b = arePlainObjects([{}, Object.create(null)]); // pravda
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // nepravda
const d = arePlainObjects([] as unknown[]); // nepravda
```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.arePlainObjects(array)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Súbor bol vygenerovaný 30 January 2026 at 16:55:46 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>