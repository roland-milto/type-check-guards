# isError

## Danasîn

Kontrol dike ka `value`-a dayîn mînakek ji `Error`-ê ye an na.

### Bikaranîn

Dema ku tu nirxek `unknown` wergirî (wek ji blokek `catch`-ê, callbackek, an pirtûkxaneyek derve) û divê bi ewlehî diyar
bikî ka ew `Error` e an na berî ku `message`, `name`, an `stack` bixwînî, `isError` bi kar bîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Berî ku nirxên `unknown` (mînak, ji `catch`-ê) wek `Error` bihesibînî, `isError` wek parêzkar (guard) bi kar bîne.

### Avantaj

- Ji bo ku nirxek `Error`-ê ye an na, kontrola demê xebatê ya hêsan peyda dike.
- Berî ku bigihîje taybetmendiyên `Error`-ê wek `message` an `stack`, alîkar dibe ku têketinên nenas (unknown) têkûz
  bike.
- Dema ku bi nirxên ji `catch`, API-yên derve, an çavkaniyên bê-type re dixebite, xetereya derketinên demê xebatê kêm
  dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isError(value)`

Parametreyên:

- `value`: Nirxa ku ji bo li hember cureya `Error`-ê were kontrol kirin.

### Importa fonksiyona herêmî

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

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isError(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isError](‎../_analysis/isError.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 12:46:12 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>