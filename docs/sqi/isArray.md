# isArray

## Përshkrim

`isArray` kontrollon nëse një vlerë e dhënë është një varg dhe kthen `true` nëse është, përndryshe `false`.

### Rast përdorimi

Valido të dhëna të panjohura (p.sh., JSON i parsuar ose përgjigje API) për të siguruar që një vlerë është varg përpara
se të iterosh, të indeksosh, ose të aksesosh `.length`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isArray` kur të duhet një kontroll në kohë ekzekutimi për vargje; kthen një boolean dhe është i sigurt për t’u
> thirrur me vlera `unknown`.

### Përparësi

- Përdor `Array.isArray` të integruar për zbulim të besueshëm të vargjeve nëpër realm-e (p.sh., iframe).
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) të përshtatshëm për guard-e dhe logjikë degëzimi.
- Funksionon me çdo lloj hyrjeje sepse parametri është `unknown`.

## Përdorim

### Sintaksë

Funksion:

- `isArray(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input është një varg në kohën e ekzekutimit
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isArray(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isArray](../_analysis/isArray.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 11:32:05 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>