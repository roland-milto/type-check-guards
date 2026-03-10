# isDate

## Përshkrim

`isDate` përcakton nëse një vlerë e dhënë është një `Date`, duke kthyer `true` për instancat `Date` dhe `false`
përndryshe.

### Rast përdorimi

Valido dhe ngushto vlera të panjohura (p.sh., të dhëna kërkese, vlera konfigurimi, ose JSON i parsuar) përpara kryerjes
së operacioneve `Date` si formatimi, krahasimet, ose thirrja e `toISOString()`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isDate` për ta ngushtuar `unknown` në `Date` në kohë ekzekutimi; kthen `true` vetëm për instanca reale
`Date` (jo stringje datash).

### Përparësi

- Ofron një mbrojtje të thjeshtë në kohë ekzekutimi për të verifikuar nëse një vlerë është një `Date`.
- Ndihmon në parandalimin e gabimeve të tipit duke siguruar që vetëm instancat `Date` të kalojnë validimin.
- Është i dobishëm për validimin e inputeve të panjohura (p.sh., payload-e API) përpara përdorimit të metodave specifike
  për datat.

## Përdorim

### Sintaksë

Funksion:

- `isDate(value)`

Parametra:

- `value`: Vlera që do të kontrollohet për tipin `Date`.

### Import lokal i funksionit

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input është një Date këtu
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isDate(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isDate](../_analysis/isDate.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 15:47:47 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>