# areTrue

## Përshkrim

Kontrollon nëse një varg jo bosh përmban vetëm vlerat booleane `true`.

### Rast përdorimi

Përdor `areTrue` për të vërtetuar që një grup parakushtesh ose flamujsh funksionaliteti janë të gjithë të aktivizuar (të
gjitha vlerat janë `true`) përpara se të vazhdosh, duke i trajtuar hyrjet bosh ose të keqformuara si të paplotësuara (
`false`).

> **Shënim për përdoruesit e TypeScript:**
>
> `areTrue` kthen `false` për një varg bosh dhe për vargje që përmbajnë çfarëdo vlere që nuk është rreptësisht `true`.

### Përparësi

- Kthen `true` vetëm kur çdo element është rreptësisht `true` dhe vargu nuk është bosh.
- Dështon shpejt: kthen `false` sapo të gjendet një vlerë jo-`true`.
- Refuzon hyrjet e pavlefshme (jo-vargje ose vargje bosh) duke kthyer `false`.

## Përdorim

### Sintaksë

Funksion:

- `areTrue(array)`

Parametra:

- `array`: Vargu që duhet kontrolluar për të gjitha vlerat `true`.

### Import lokal i funksionit

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areTrue(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:52:51 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>