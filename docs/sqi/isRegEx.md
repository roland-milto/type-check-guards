# isRegEx

## Përshkrim

Përcakton nëse një vlerë e dhënë është një instancë `RegExp`.

### Rast përdorimi

Valido vlerat e dhëna nga përdoruesi ose vlerat dinamike (p.sh., konfigurime, payload-e API, inpute të plugin-eve)
përpara se t’i trajtosh si një shprehje të rregullt.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isRegEx` për të ngushtuar vlerat `unknown` (ose union) përpara se të përdorësh vetitë ose metodat specifike të
> RegExp; ai kthen `true` vetëm për vlera që janë instanca të `RegExp`.

### Përparësi

- Ofron një mbrojtës të thjeshtë tipi në kohë ekzekutimi për të kontrolluar nëse një vlerë është një `RegExp`.
- Ndihmon në parandalimin e gabimeve kur kodi pret një shprehje të rregullt (p.sh., përpara thirrjes së `test`, `exec`,
  ose leximit të `source`).
- Funksionon si me literalet e regex-it ashtu edhe me instancat e krijuara përmes `new RegExp(...)`.
- Kthen një rezultat të qartë boolean (`true`/`false`) pa hedhur për inpute që nuk janë regex.

## Përdorim

### Sintaksë

Funksion:

- `isRegEx(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input është një RegExp këtu
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isRegEx(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:31:02 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>