# isMap

## Danasîn

Kontrol dike ka `value`-a dayîn `Map` e an na; heke `Map` be `true` vedigerîne û wekî din `false`.

### Bikaranîn

Dema ku tu nirxek `unknown` distînî (mînak: ji parsekirina JSON, API-yên derve, an jî têketina bikarhêner) û pêdivî ye
ku berî ku operasyonên `Map`-ê bikî ew `Map` be, `isMap` bi kar bîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isMap` parêzvanekî runtime ye ku dema nirx `Map` be `true` vedigerîne û wekî din `false`; berî ku API-yên `Map`-ê
> bang bikî, ji bo tengkirina `unknown` bi kar bîne.

### Avantaj

- Ji bo ku nirxek `Map` e an na, kontrola bilez a demê dimeşîne peyda dike.
- Bi parastina rêyên kodê yên ku pêdivî bi metodên `Map`-ê wekî `get`, `set`, û `has` hene, alî dike ku xeletiyên
  cureyê (type errors) neyên çêbûn.
- Dema ku bi têketinên `unknown` re kar dike, wekî gava kontrola rastnivîsî ya sivik, baş dixebite.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isMap(value)`

Parametreyên:

- `value`: Nirxa ku were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isMap(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 16:05:13 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>