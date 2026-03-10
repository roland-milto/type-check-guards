# isWeakSet

## Përshkrim

Përcakton nëse `value` e dhënë është një `WeakSet` objektesh.

### Rast përdorimi

Përdor `isWeakSet` kur pranon hyrje pa tip (p.sh., nga API të jashtme, konfigurim dinamik, ose vlera `unknown`) dhe
duhet të verifikosh se është një `WeakSet` përpara se të përdorësh operacione specifike të `WeakSet`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isWeakSet` për të ngushtuar një vlerë `unknown` në `WeakSet<object>` në kohë ekzekutimi; ki parasysh se
`WeakSet` mund të përmbajë vetëm referenca objektesh.

### Përparësi

- Ofron një kontroll të thjeshtë në kohë ekzekutimi për të përcaktuar nëse një vlerë është një `WeakSet`.
- Ndihmon në parandalimin e gabimeve të tipit duke siguruar që vetëm instancat `WeakSet` të trajtohen si të tilla.
- Funksionon me çdo hyrje `unknown` dhe kthen një rezultat të qartë boolean (`true`/`false`).

## Përdorim

### Sintaksë

Funksion:

- `isWeakSet(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // e vërtetë
console.log(isWeakSet(b)); // e rreme

if (isWeakSet(a)) {
  // a është një WeakSet në kohë ekzekutimi
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isWeakSet(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:19:13 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>