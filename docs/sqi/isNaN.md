# isNaN

## Përshkrim

Përcakton nëse `value` e dhënë është një `NaN` e tipit `number` pa konvertuar vargjet.

### Rast përdorimi

Vlerëso hyrje të pabesueshme ose me tipizim të lirshëm (p.sh. ngarkesa API, vlera formulari, JSON i analizuar) për të
zbuluar vlerën e veçantë `NaN` dhe për ta trajtuar në mënyrë të qartë, ndërsa hyrjet jo-numër t’i trajtosh si jo `NaN`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isNaN` kur duhet të zbulosh vlerën e veçantë numerike `NaN` duke u siguruar që hyrja është vërtet një
`number` (pa konvertim nga varg në numër).

### Përparësi

- Kontrollon nëse një vlerë është `NaN` pa detyruar vlera jo-numër (p.sh. vargje) të shndërrohen në numra.
- Kthen `true` vetëm për vlera që janë njëkohësisht të tipit `number` dhe `NaN`.
- I sigurt për hyrje `unknown` dhe shmang pozitive të rreme nga konvertimet e nënkuptuara.

## Përdorim

### Sintaksë

Funksion:

- `isNaN(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar nëse është një `NaN` e tipit `number`.

### Import lokal i funksionit

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // e vërtetë
console.log(isNaN(b)); // e rreme
console.log(isNaN(c)); // e rreme

if (isNaN(a)) {
  // a është një numër dhe në mënyrë specifike NaN
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isNaN(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 15:48:04 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>