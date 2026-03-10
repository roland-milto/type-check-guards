# isPlainObject

## Përshkrim

Kontrollon nëse një `value` e dhënë është një objekt i thjeshtë dhe kthen `true` nëse është, përndryshe `false`.

### Rast përdorimi

Vlerësoni që një hyrje `unknown` (p.sh., JSON i parsuar, të dhëna të jashtme, ose argumente funksioni) është një objekt
i thjeshtë përpara se të lexoni çelësa ose ta maponi atë në një objekt konfigurimi të tipizuar.

> **Shënim për përdoruesit e TypeScript:**
>
> `isPlainObject` është i dobishëm për të ngushtuar `unknown` përpara se ta trajtoni si një objekt të ngjashëm me
> record; kthen `true` vetëm për vlera, etiketa e brendshme e të cilave është `[object Object]`.

### Përparësi

- Ofron një kontroll të thjeshtë dhe të besueshëm nëse një vlerë është një objekt i thjeshtë (p.sh., `Object` / `{}`),
  duke kthyer `true` ose `false`.
- Ndihmon të dallohen objektet e thjeshta nga vargjet (arrays), funksionet, `null` dhe lloje të tjera jo-objekte të
  thjeshta.
- I dobishëm si një type guard në TypeScript për të ngushtuar vlerat `unknown` përpara se të aksesohen vetitë e
  objektit.

## Përdorim

### Sintaksë

Funksion:

- `isPlainObject(value)`

Parametra:

- `value`: Vlera që testohet për statusin e objektit të thjeshtë.

### Import lokal i funksionit

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input është një objekt i thjeshtë këtu
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // e vërtetë
console.log(isPlainObject([])); // e rreme
console.log(isPlainObject(null)); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isPlainObject(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 12:19:49 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>