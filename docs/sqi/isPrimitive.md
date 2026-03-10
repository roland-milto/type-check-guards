# isPrimitive

## Përshkrim

`isPrimitive` përcakton nëse një vlerë e dhënë është primitive (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Rast përdorimi

Valido hyrjet në kohë ekzekutimi (p.sh., fushat e payload-it të API-së, vlerat e konfigurimit, ose të dhëna të ofruara
nga përdoruesi) për të siguruar që një vlerë është primitive përpara serializimit, regjistrimit (logging), ose aplikimit
të operacioneve vetëm për primitive.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isPrimitive` për të mbrojtur hyrjet `unknown` përpara se t’i trajtosh si objekte ose funksione; kthen `true`
> për primitive dhe `false` për objekte dhe funksione.

### Përparësi

- Kontroll i shpejtë, pa alokime, për të përcaktuar nëse një vlerë është primitive e JavaScript-it.
- E trajton saktë `null` si primitive (edhe pse `typeof null` është `"object"`).
- Ndihmon në ngushtimin e vlerave `unknown` përpara kryerjes së operacioneve vetëm për objekte.

## Përdorim

### Sintaksë

Funksion:

- `isPrimitive(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar për tip primitiv.

### Import lokal i funksionit

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isPrimitive(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:57:49 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>