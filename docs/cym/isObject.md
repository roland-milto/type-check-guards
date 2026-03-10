# isObject

## Disgrifiad

Yn penderfynu a yw `value` penodol yn `object` (gan eithrio `null`).

### Achos defnydd

Defnyddiwch `isObject` i ddilysu mewnbynnau anhysbys (e.e., JSON wedi'i pharsio, ymatebion API, llwythi tâl
digwyddiadau) cyn cyrchu priodweddau, gan sicrhau bod y gwerth yn wrthrych ac nid yn `null`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Mae `isObject` yn warchodwr amser rhedeg sy'n dychwelyd boolean; nid yw'n culhau i siâp gwrthrych penodol. Cyfunwch ef
> â gwiriadau ychwanegol (e.e., bodolaeth priodwedd) pan fydd angen teipio cryfach arnoch.

### Manteision

- Yn dychwelyd `true` dim ond ar gyfer gwerthoedd nad ydynt yn `null` y mae eu `typeof` yn `"object"`.
- Yn atal y fagl JavaScript gyffredin lle byddai `null` fel arall yn cael ei drin fel gwrthrych.
- Yn gweithio ar gyfer gwrthrychau plaen ac enghreifftiau gwrthrychau adeiledig (e.e., `Date`, `RegExp`).
- Gwiriad amser rhedeg syml a chyflym sy'n addas ar gyfer rhaglennu amddiffynnol a dilysu mewnbwn.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isObject(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio i weld a yw'n `object`.

### Mewnforio swyddogaeth leol

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // mae input yn wrthrych nad yw'n null ar amser rhedeg
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isObject(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isObject](../_analysis/isObject.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:18:07 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>