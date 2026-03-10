# isObject

## Përshkrim

Përcakton nëse një `value` e dhënë është një `object` (duke përjashtuar `null`).

### Rast përdorimi

Përdorni `isObject` për të validuar inpute të panjohura (p.sh., JSON i parsuar, përgjigje API, payload-e eventesh)
përpara se të aksesoni prona, duke siguruar që vlera është një objekt dhe jo `null`.

> **Shënim për përdoruesit e TypeScript:**
>
> `isObject` është një guard në kohë ekzekutimi që kthen një boolean; nuk e ngushton tipin në një formë specifike
> objekti. Kombinojeni me kontrolle shtesë (p.sh., ekzistenca e pronave) kur keni nevojë për tipizim më të fortë.

### Përparësi

- Kthen `true` vetëm për vlera jo-`null` ku `typeof` është `"object"`.
- Parandalon kurthin e zakonshëm në JavaScript ku `null` përndryshe do të trajtohej si objekt.
- Funksionon për objekte të thjeshta dhe instanca të integruara të objekteve (p.sh., `Date`, `RegExp`).
- Kontroll i thjeshtë dhe i shpejtë në kohë ekzekutimi, i përshtatshëm për programim mbrojtës dhe validim të inputeve.

## Përdorim

### Sintaksë

Funksion:

- `isObject(value)`

Parametra:

- `value`: Vlera që do të kontrollohet nëse është një `object`.

### Import lokal i funksionit

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input është një objekt jo-null në kohën e ekzekutimit
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isObject(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isObject](../_analysis/isObject.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 00:20:25 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>