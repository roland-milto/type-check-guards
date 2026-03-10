# isError

## Disgrifiad

Yn gwirio a yw `value` penodol yn enghraifft o `Error`.

### Achos defnydd

Defnyddiwch `isError` pan fyddwch yn derbyn gwerth `unknown` (megis o floc `catch`, galwad yn ôl, neu lyfrgell allanol)
ac mae angen i chi benderfynu'n ddiogel a yw'n `Error` cyn darllen `message`, `name`, neu `stack`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isError` i warchod gwerthoedd `unknown` (e.e., o `catch`) cyn eu trin fel `Error`.

### Manteision

- Yn darparu gwiriad amser rhedeg syml i weld a yw gwerth yn enghraifft o `Error`.
- Yn helpu i gyfyngu mewnbynnau anhysbys cyn cyrchu priodweddau `Error` fel `message` neu `stack`.
- Yn lleihau'r risg o eithriadau amser rhedeg wrth drin gwerthoedd o `catch`, APIau allanol, neu ffynonellau heb deip.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isError(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio yn erbyn y math `Error`.

### Mewnforio swyddogaeth leol

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isError(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isError](../_analysis/isError.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 12:45:06 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>