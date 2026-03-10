# areErrors

## Përshkrim

Kontrollon nëse një varg është jo bosh dhe përmban vetëm objekte `Error`, duke kthyer `true` ose `false`.

### Rast përdorimi

Vërteto që një `unknown[]` i ofruar në kohë ekzekutimi (p.sh., dështime të grumbulluara, rezultate validimi, ose të
dhëna të deserializuara) është një listë jo bosh objektesh `Error` përpara se të iterosh, të regjistrosh (logging), ose
t’i rihidhësh (rethrow).

> **Shënim për përdoruesit e TypeScript:**
>
> `areErrors` kthen `true` vetëm për një varg të mbushur ku çdo element është një `Error`; kthen `false` për një varg
> bosh ose nëse ndonjë element nuk është një `Error`.

### Përparësi

- Siguron që çdo element është një instancë `Error`, duke mundësuar trajtim dhe regjistrim (logging) të sigurt të
  gabimeve.
- Refuzon vargjet bosh, duke parandaluar që gjendjet aksidentale “pa gabime” të trajtohen si lista të vlefshme gabimesh.
- Funksionon mirë si një mbrojtës në kohë ekzekutimi kur punohet me hyrje `unknown[]` (p.sh., nga API-t ose blloqet
  `catch`).

## Përdorim

### Sintaksë

Funksion:

- `areErrors(array)`

Parametra:

- `array`: Vargu që kontrollohet për objekte `Error`.

### Import lokal i funksionit

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value është një varg jo-bosh i objekteve Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areErrors(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 12:35:36 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>