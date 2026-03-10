# isNullOrUndefined

## Përshkrim

Kontrollon nëse një vlerë e dhënë është `null` ose `undefined`.

### Rast përdorimi

Përdor `isNullOrUndefined` kur ke nevojë t’i trajtosh si “pa vlerë” si `null` ashtu edhe `undefined`, si p.sh. gjatë
validimit të inputeve opsionale, normalizimit të payload-eve të API-së, ose mbrojtjes së rrugëve të kodit përpara
dereferencimit të një vlere potencialisht që mungon.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isNullOrUndefined` për t’u mbrojtur nga vlera që mungojnë përpara se të aksesosh vetitë ose të thërrasësh
> metodat; kthen `true` vetëm për `null` dhe `undefined`.

### Përparësi

- Ofron një mbrojtës të qartë dhe të ripërdorshëm për të zbuluar `null` dhe `undefined` në një vend.
- Kthen një boolean të thjeshtë (`true`/`false`) që është i lehtë për t’u kombinuar në kushte dhe validime.
- Ndihmon të shmangen gabimet e zakonshme në kohë ekzekutimi duke kontrolluar për vlera që mungojnë përpara se të
  aksesohen vetitë ose të thirren metodat.

## Përdorim

### Sintaksë

Funksion:

- `isNullOrUndefined(value)`

Parametra:

- `value`: Vlera që do të kontrollohet për `null` ose `undefined`.

### Import lokal i funksionit

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // trajto vlerën që mungon
}

console.log(isNullOrUndefined(b)); // e vërtetë
console.log(isNullOrUndefined(c)); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isNullOrUndefined(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 00:35:16 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>