# isFloat

## Ibsa

`isFloat` `value` kenname lakkoofsa floating-point finite ta'uu isaa (jechuunis `number` ta'ee lakkoofsa guutuu hin
taane) murteessa.

### Haala itti fayyadama

Galtee lakkoofsa fayyadamaan kennu keessatti bakka gatiin qoodamee (fractional) barbaachisu (fakkeenyaaf, gatii,
safartuu, reetii) mirkaneessuu; akkasumas lakkoofsa guutuu, `NaN`, fi infinitywwan diduu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isFloat` yeroo galtee lakkoofsa finite ta'ee, lakkoofsa guutuu hin taane qofa fudhachuu barbaaddu fayyadami;
> lakkoofsa guutuu fi lakkoofsa finite hin taane ni dida.

### Faayidaa

- `true` kan deebisa lakkoofsa finite ta'ee, lakkoofsa guutuu hin taane qofaaf (lakkoofsa guutuu, `NaN`, `Infinity`, fi
  `-Infinity` ni hambisa).
- Gosa galtee kamiyyuu (`unknown`) waliin ni hojjata; `typeof value === "number"` jedhu ilaaluun of eeggannoodhaan ni
  xiqqeessa.
- Eeggannoo lakkoofsa keessaa ijaarame (`Number.isInteger`, `Number.isFinite`) fayyadama; kanaaf amala tilmaamamuu
  danda'u kenna.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isFloat(value)`

Paaraameetaroota:

- `value`: Gatii lakkoofsa floating-point ta'uu isaa mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // gatiin yeroo hojii irratti lakkoofsa dha; daangaa qaba, akkasumas intijara miti
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isFloat(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 16:09:15 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>