# isFilledArray

## Disgrifiad

Yn gwirio a yw `value` yn arae gyda o leiaf un elfen, gan ddychwelyd `true` neu `false`.

### Achos defnydd

Defnyddiwch `isFilledArray` i ddilysu data sy’n dod i mewn (e.e., llwythi tâl API, gwerthoedd ffurflen, cyfluniad) cyn
iteru, cyrchu’r elfen gyntaf, neu gymhwyso rhesymeg sy’n gofyn am o leiaf un eitem.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> `isFilledArray` yw guard amser rhedeg sy’n dychwelyd boole; nid yw’n culhau mathau elfennau y tu hwnt i gadarnhau nad
> yw’r arae’n wag.

### Manteision

- Gwiriad syml a chyflym am arae nad yw’n wag gan ddefnyddio `Array.isArray` a gwiriad hyd.
- Yn helpu i osgoi gwallau amser rhedeg pan fo cod yn tybio bod gan arae o leiaf un elfen.
- Canlyniad boole clir: yn dychwelyd `true` ar gyfer araeau nad ydynt yn wag a `false` fel arall.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isFilledArray(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio a yw’n arae nad yw’n wag.

### Mewnforio swyddogaeth leol

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // mae input yn arae nad yw'n wag ar amser rhedeg
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isFilledArray(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 11:46:45 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>