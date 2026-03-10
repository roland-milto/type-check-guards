# isOctal

## Disgrifiad

Yn penderfynu a yw gwerth yn llinyn llythrennol wythol dilys (e.e. `0o755`).

### Achos defnydd

Dilysu mewnbwn defnyddiwr neu werthoedd ffurfweddu y mae'n rhaid eu mynegi fel llinyn llythrennol wythol (er enghraifft,
moddau caniatâd ffeil fel `0o644`) cyn eu dosrannu neu eu trosi.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> `isOctal` yw gwarchodwr math (`value is string`). Ar ôl canlyniad `true`, mae TypeScript yn culhau'r newidyn a wiriwyd
> i `string`.

### Manteision

- Yn darparu gwarchodwr math llym: yn dychwelyd `true` dim ond pan fo'r mewnbwn yn llinyn sy'n cyfateb i fformat
  llythrennol wythol.
- Yn gwrthod llinynnau gwag a llinynnau â bylchau blaen/ôl (rheolaeth/gofod ASCII), gan leihau cydweddiadau damweiniol.
- Yn cefnogi arwydd dewisol ac nid yw'n sensitif i lythrennau mawr/bach ar gyfer y rhagddodiad `0o`/`0O`.
- Yn oddefgar ar gyfer mewnbynnau nad ydynt yn llinynnau drwy ddychwelyd `false` yn hytrach na thaflu eithriad.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isOctal(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // gwir
console.log(isOctal(b)); // gwir
console.log(isOctal(c)); // ffug
console.log(isOctal(d)); // ffug

if (isOctal(a)) {
  // mae a yn llinyn yma
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isOctal(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:44:38 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>