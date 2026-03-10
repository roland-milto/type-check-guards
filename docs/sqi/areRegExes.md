# areRegExes

## Përshkrim

`areRegExes` kontrollon nëse një vlerë është një varg i mbushur që përmban vetëm objekte `RegExp`.

### Rast përdorimi

Valido që një opsion konfigurimi (p.sh., një listë pattern-esh lejo/ndalo) është një varg jo-bosh shprehjesh të
rregullta përpara se ta përdorësh për përputhje.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areRegExes` për të ngushtuar `unknown` në `RegExp[]` përpara se të iterosh ose të kompozosh pattern-e.

### Përparësi

- Siguron që një vlerë është një varg jo-bosh ku çdo element është një instancë `RegExp`.
- Ofron një mbrojtës të thjeshtë boolean (`true`/`false`) për të validuar inputin e përdoruesit ose konfigurimin.
- Ndihmon në parandalimin e gabimeve në kohë ekzekutimi kur kodi i mëvonshëm supozon se të gjithë elementët mbështesin
  operacione me shprehje të rregullta.

## Përdorim

### Sintaksë

Funksion:

- `areRegExes(array)`

Parametra:

- `array`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns është një varg i RegExp këtu
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areRegExes(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:21:39 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>