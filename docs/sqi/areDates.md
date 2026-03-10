# areDates

## Përshkrim

`areDates` përcakton nëse një varg i dhënë është i mbushur dhe përmban vetëm objekte `Date`, duke kthyer `true` vetëm
kur të gjithë elementët janë data të vlefshme.

### Rast përdorimi

Përdor `areDates` për të validuar hyrje të panjohura (p.sh., JSON i analizuar, të dhëna formulari, payload-e API)
përpara se të ekzekutosh logjikë specifike për datat si renditja sipas kohës, formatimi ose llogaritja e intervaleve.

> **Shënim për përdoruesit e TypeScript:**
>
> Kthen `true` vetëm për vargje jo-boshe ku çdo element është një `Date`; vargjet boshe japin `false`.

### Përparësi

- Siguron që një varg të mos jetë bosh përpara se të validohet përmbajtja e tij, duke parandaluar `true` për hyrje
  boshe.
- Verifikon që çdo element është një instancë `Date`, duke kthyer `false` menjëherë në mospërputhjen e parë.
- I dobishëm si një kontroll në stil roje përpara kryerjes së operacioneve specifike për datat mbi elementët e vargut.

## Përdorim

### Sintaksë

Funksion:

- `areDates(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për objekte `Date`.

### Import lokal i funksionit

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // e vërtetë
console.log(areDates(b)); // e rreme
console.log(areDates(c)); // e rreme

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areDates(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areDates](../_analysis/areDates.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 15:32:24 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>