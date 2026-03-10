# isOneOfType

## Disgrifiad

Mae `isOneOfType` yn penderfynu a yw `value` penodol yn cydweddu ag o leiaf un o’r llinynnau math a ddarperir, gan
ddychwelyd `true` os canfyddir unrhyw gydweddiad a `false` fel arall.

### Achos defnydd

Dilysu data â theip rhydd neu ddata allanol (e.e., JSON wedi’i pharsio, paramedrau ymholiad) drwy ganiatáu sawl math
amser rhedeg derbyniol (megis `number` neu `string`) cyn parhau â rhesymeg bellach.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isOneOfType` pan fyddwch eisiau gwiriad amser rhedeg bod gwerth yn cydweddu ag unrhyw un o sawl math a
> ganiateir; mae’n dychwelyd `true` os yw o leiaf un math yn cydweddu, fel arall `false`.

### Manteision

- Yn gwirio gwerth yn erbyn sawl math a ganiateir mewn un alwad, gan ddychwelyd `true` ar y cydweddiad cyntaf.
- Yn gweithio gyda mewnbynnau `unknown`, gan ei wneud yn ddefnyddiol ar ffiniau amser rhedeg (e.e., data allanol,
  mewnbwn defnyddiwr).
- Canlyniad booleaidd syml (`true`/`false`) sy’n cyfansoddi’n dda gyda rhesymeg amodol a dychweliadau cynnar.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isOneOfType(value, types)`

Paramedrau:

- `value`: Y gwerth i’w wirio yn erbyn y mathau penodedig.
- `types`: Arae o linynnau math sy’n cynrychioli mathau posibl y gwerth.

### Mewnforio swyddogaeth leol

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // mae input yn wrthrych ar amser rhedeg
}

console.log(isOneOfType(3, ["number", "string"])); // gwir
console.log(isOneOfType("hello", ["number", "boolean"])); // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isOneOfType(value, types)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:42:56 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>