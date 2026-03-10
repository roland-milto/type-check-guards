# arePlainObjects

## Përshkrim

Kontrollon nëse të gjithë elementët e një vargu janë objekte të thjeshta, duke kthyer `true` vetëm nëse çdo element
kualifikohet.

### Rast përdorimi

Validoni të dhëna të jashtme ose pa tipizim (p.sh., JSON i analizuar, payload-e API, dërgime formularësh) për të
siguruar që keni marrë një varg jo bosh ku çdo hyrje është një objekt i thjeshtë përpara se të iteroni dhe të lexoni
vetitë.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `arePlainObjects` për të validuar hyrje të panjohura përpara se ta trajtosh si `Record<string, unknown>[]` (ose
> një formë objekti më të rreptë) në TypeScript.

### Përparësi

- Siguron që çdo element në vargun hyrës është një objekt i thjeshtë, duke kthyer `true` vetëm kur të gjithë elementët
  përputhen.
- Refuzon herët hyrjet e pavlefshme (jo-vargje ose vargje bosh) duke kthyer `false`.
- I trajton si të vlefshëm si objektet literal ashtu edhe objektet `Object.create(null)` si objekte të thjeshta.

## Përdorim

### Sintaksë

Funksion:

- `arePlainObjects(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente që janë objekte të thjeshta.

### Import lokal i funksionit

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // e vërtetë
const b = arePlainObjects([{}, Object.create(null)]); // e vërtetë
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // e rreme
const d = arePlainObjects([] as unknown[]); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.arePlainObjects(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 16:55:53 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>