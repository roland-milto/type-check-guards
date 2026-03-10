# areBuffers

## Përshkrim

`areBuffers` kontrollon nëse vlera e dhënë është një varg jo-bosh dhe i mbushur ku çdo element është një `Buffer`, duke
kthyer `true` nëse po dhe `false` përndryshe.

### Rast përdorimi

Validoni vargjet hyrëse të copëzave (p.sh., nga stream-et, ngarkimet e skedarëve, ose paketat e rrjetit) për të siguruar
që të gjitha pjesët janë instanca `Buffer` përpara bashkimit, dekodimit, ose kalimit të tyre te funksionet kriptografike
ose të përpunimit binar.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdorni `areBuffers` për të validuar `unknown[]` përpara se të thërrisni API specifike të Buffer-it si
`Buffer.concat`, duke siguruar që funksioni kthen `true` vetëm kur çdo element është një `Buffer`.

### Përparësi

- Siguron që çdo element në hyrje është një instancë `Buffer` e Node.js, duke kthyer `true` vetëm kur i gjithë vargu
  përputhet.
- Refuzon herët hyrjet e pavlefshme duke kërkuar një varg jo-bosh dhe të mbushur; kthen `false` për vargje bosh ose për
  vlera që nuk janë vargje.
- E dobishme si një kontroll mbrojtës përpara kryerjes së operacioneve vetëm me buffer (p.sh., bashkim, hashim,
  protokolle binare).

## Përdorim

### Sintaksë

Funksion:

- `areBuffers(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për instanca `Buffer`.

### Import lokal i funksionit

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areBuffers(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 16:27:15 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>