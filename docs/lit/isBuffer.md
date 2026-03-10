# isBuffer

## Aprašymas

Patikrina, ar reikšmė yra Node.js `Buffer`, ir grąžina `true` arba `false`.

### Naudojimo atvejis

Validuokite įvestis vykdymo metu (pvz., API duomenų apkrovas, failų duomenis ar pranešimų buferius), kad prieš
apdorojimą įsitikintumėte, jog reikšmė yra `Buffer`, ir patikimai gautumėte `false`, kai vykdoma ne Node.js aplinkoje,
kur `Buffer` gali neegzistuoti.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isBuffer`, kad susiaurintumėte `unknown` reikšmes iki `Buffer` prieš kviesdami `Buffer` specifinius
> metodus.

### Privalumai

- Saugiai aptinka Node.js `Buffer` egzempliorius naudodamas `Buffer.isBuffer`.
- Grąžina `false` aplinkose, kuriose `Buffer` neprieinamas, taip išvengiant vykdymo laiko klaidų.
- Veikia su `unknown` įvestimi, todėl tinka vykdymo laiko validacijai ir tipo susiaurinimui.

## Naudojimas

### Sintaksė

Funkcija:

- `isBuffer(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // tiesa
console.log(isBuffer(b)); // netiesa

if (isBuffer(a)) {
  // a čia yra Buffer
  console.log(a.toString("utf8"));
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isBuffer(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 16:32:17 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>