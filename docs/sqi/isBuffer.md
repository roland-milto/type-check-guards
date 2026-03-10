# isBuffer

## Përshkrim

Kontrollon nëse një vlerë është një `Buffer` i Node.js dhe kthen `true` ose `false`.

### Rast përdorimi

Valido hyrjet në kohë ekzekutimi (p.sh., payload-e API, të dhëna skedari, ose buffer-a mesazhesh) për të siguruar që një
vlerë është një `Buffer` përpara se ta përpunosh, dhe merr në mënyrë të besueshme `false` kur ekzekutohet jashtë Node.js
ku `Buffer` mund të mos ekzistojë.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isBuffer` për të ngushtuar vlerat `unknown` në `Buffer` përpara se të thërrasësh metoda specifike të Buffer.

### Përparësi

- Zbulon në mënyrë të sigurt instancat e Node.js `Buffer` duke përdorur `Buffer.isBuffer`.
- Kthen `false` në mjedise ku `Buffer` nuk është i disponueshëm, duke shmangur gabimet gjatë ekzekutimit.
- Funksionon me hyrje `unknown`, duke e bërë të përshtatshëm për validim në kohë ekzekutimi dhe ngushtim të tipit.

## Përdorim

### Sintaksë

Funksion:

- `isBuffer(value)`

Parametra:

- `value`: Vlera që do të testohet.

### Import lokal i funksionit

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // e vërtetë
console.log(isBuffer(b)); // e rreme

if (isBuffer(a)) {
  // a është një Buffer këtu
  console.log(a.toString("utf8"));
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isBuffer(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 16:33:16 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>