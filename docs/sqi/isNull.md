# isNull

## Përshkrim

Përcakton nëse `value` i dhënë është `null`.

### Rast përdorimi

Përdor `isNull` për të validuar inputet ose fushat e payload-it të API-së ku `null` është një vlerë sinjalizuese me
kuptim dhe duhet trajtuar ndryshe nga `undefined` ose vlera të tjera.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isNull` kur duhet të dallosh `null` nga `undefined` dhe vlera të tjera falsy; kthen `true` vetëm për `null`.

### Përparësi

- Ofron një kontroll të saktë për `null` pa e ngatërruar me `undefined`.
- Funksionon në mënyrë të besueshme për çdo lloj inputi sepse pranon `unknown`.
- I thjeshtë, i shpejtë dhe pa efekte anësore; kthen vetëm `true` ose `false`.

## Përdorim

### Sintaksë

Funksion:

- `isNull(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar për `null`.

### Import lokal i funksionit

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // e vërtetë
console.log(isNull(b)); // e rreme

if (isNull(a)) {
  // a është null këtu
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isNull(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isNull](../_analysis/isNull.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 15:40:51 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>