# isHexadecimal

## Disgrifiad

Mae `isHexadecimal` yn gwirio a yw gwerth penodol yn llythrennol llinyn hecsadegol gyda rhagddodiad gorfodol `0x`/`0X`.

### Achos defnydd

Defnyddiwch `isHexadecimal` i ddilysu gwerthoedd cyfluniad, meysydd llwyth tâl API, neu ddadleuon CLI y mae’n rhaid eu
darparu fel llinynnau llythrennol hecsadegol (e.e., IDau, masgiau, neu gyfeiriadau) ac na ddylent gynnwys bylchau gwyn
o’u cwmpas.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isHexadecimal` pan fydd angen i chi ddilysu mewnbwn defnyddiwr neu ddata wedi’i gyfresoli fel llinyn
> llythrennol hecsadegol llym (gan gynnwys y rhagddodiad `0x`/`0X`) cyn ei ddadansoddi neu ei drosi.

### Manteision

- Dilysu bod gwerth yn llinyn ac yn cyd-fynd â fformat llythrennol hecsadegol llym (mae angen y rhagddodiad `0x`/`0X`).
- Gwrthod llinynnau â bylchau gwyn ar y dechrau neu’r diwedd, gan helpu i osgoi derbyn mewnbwn wedi’i badio ar ddamwain.
- Cefnogi arwydd dewisol ac mae’n ansensitif i lythrennau mawr/bach ar gyfer y rhagddodiad a’r digidau, gan ddychwelyd
  `true`/`false` yn rhagweladwy.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isHexadecimal(value)`

Paramedrau:

- `value`: Y gwerth i’w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (rhagddodiad ar goll)
isHexadecimal(" 0x1A2B"); // false (bwlch gwyn ar y dechrau)
isHexadecimal(0x1a2b); // false (nid llinyn)

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isHexadecimal(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 22:58:23 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>