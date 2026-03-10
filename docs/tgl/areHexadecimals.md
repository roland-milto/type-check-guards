# areHexadecimals

## Paglalarawan

Sinusuri kung ang lahat ng elemento sa isang array ay mga hexadecimal na string, at nagbabalik ng `true` lamang para sa
mga hindi walang lamang array kung saan valid ang bawat item.

### Kaso ng paggamit

Gamitin ang `areHexadecimals` upang beripikahin ang input ng user o panlabas na data (hal., mga ID, checksum, color code
na walang nangungunang '#') bago magsagawa ng hexadecimal parsing o karagdagang pagproseso.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areHexadecimals` upang beripikahin ang hindi kilalang input bago mag-parse o mag-convert ng mga value (
> halimbawa, bago ang `parseInt(value, 16)` o mga conversion sa BigInt).

### Mga bentahe

- Bine-beripika na ang bawat elemento ay isang hexadecimal na string at nagbabalik ng `true` lamang kapag tumutugma ang
  lahat ng item.
- Tinatanggihan ang mga walang lamang array ayon sa disenyo, at nagbabalik ng `false` kapag nawawala ang input na data.
- Nagbibigay ng simpleng boolean na resulta (`true`/`false`) na angkop para sa mga guard at maagang pagbalik (
  early-return) na beripikasyon.

## Paggamit

### Sintaks

Function:

- `areHexadecimals(array)`

Mga parameter:

- `array`: Ang array na susuriin kung ang mga elemento ay mga hexadecimal na string.

### Lokal na pag-import ng function

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areHexadecimals(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:08:07 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>