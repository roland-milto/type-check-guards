# areObjects

## Përshkrim

`areObjects` kontrollon nëse një varg i mbushur i dhënë përmban vetëm objekte.

### Rast përdorimi

Përdor `areObjects` kur merr një varg të panjohur (p.sh., nga parsimi i JSON-it ose API-të e jashtme) dhe duhet të
sigurohesh që nuk është bosh dhe që çdo element është një objekt përpara se të iterosh dhe të aksesosh vetitë e
objektit.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areObjects` për të validuar `unknown[]` përpara se t’i trajtosh elementet si objekte; kthen `false` për vargje
> bosh.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg i mbushur dhe çdo element është një objekt.
- Ndërpret herët dhe kthen `false` sapo të gjendet një element që nuk është objekt.
- Ndihmon në validimin e hyrjeve të panjohura përpara kryerjes së operacioneve specifike për objektet.

## Përdorim

### Sintaksë

Funksion:

- `areObjects(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente objekt.

### Import lokal i funksionit

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value është një varg i mbushur me objekte
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areObjects(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 00:10:26 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>