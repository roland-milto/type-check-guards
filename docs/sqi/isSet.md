# isSet

## Përshkrim

Përcakton nëse një vlerë e dhënë është një `Set`.

### Rast përdorimi

Valido hyrjet nga burime të jashtme (p.sh., analizimi i JSON-it, hyrja e përdoruesit ose API-të e palëve të treta) për
të siguruar që një vlerë është një `Set` përpara se të kryesh operacione me `Set`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isSet` për të ngushtuar vlerat `unknown` përpara se të thërrasësh API specifike të `Set`-it si `.add`, `.has`
> ose `.size`.

### Përparësi

- Ofron një kontroll të thjeshtë në kohë ekzekutimi për të konfirmuar nëse një vlerë është një `Set`.
- Ndihmon në parandalimin e gabimeve të tipit duke lejuar degëzim të hershëm kur një vlerë nuk është një `Set`.
- Funksionon me çdo përmbajtje të `Set`-it (bosh ose i mbushur) dhe kthen `true`/`false` në mënyrë të qëndrueshme.

## Përdorim

### Sintaksë

Funksion:

- `isSet(value)`

Parametra:

- `value`: Vlera për t'u kontrolluar.

### Import lokal i funksionit

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a është një Set gjatë ekzekutimit
  console.log(a.size);
}

console.log(isSet(b)); // false
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isSet(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isSet](../_analysis/isSet.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:11:15 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>