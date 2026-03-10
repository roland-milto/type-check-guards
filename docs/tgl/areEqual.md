# areEqual

## Paglalarawan

Sinusuri ng `areEqual` kung ang lahat ng elemento sa isang array ay katumbas ng ibinigay na inaasahang halaga, at
nagbabalik ng `true` lamang para sa mga hindi bakanteng array kung saan tumutugma ang bawat item.

### Kaso ng paggamit

I-validate na ang isang listahan ay naglalaman lamang ng iisang pinahihintulutang halaga (hal., lahat ng status flag ay
`true`, lahat ng role ay `"admin"`, o lahat ng numerong entry ay katumbas ng kinakailangang constant) habang itinuturing
na di-wasto (`false`) ang bakanteng input.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areEqual` kapag kailangan mo ng mahigpit na pag-check na lahat ng item ay pare-pareho; nagbabalik ito ng
`false` para sa mga bakanteng array at para sa anumang input na hindi array o hindi napuno.

### Mga bentahe

- Nagbabalik ng `true` lamang kapag bawat elemento ay tumutugma sa inaasahang halaga; kung hindi, nagbabalik ng `false`.
- Mabilis na bumibigay: humihinto sa pag-check sa sandaling may matagpuang elementong hindi tumutugma.
- Nagpoprotekta laban sa di-wastong input sa pamamagitan ng pagbabalik ng `false` kapag ang input ay hindi isang
  napunong array.

## Paggamit

### Sintaks

Function:

- `areEqual(value, expected)`

Mga parameter:

- `value`: Ang array na susuriin.
- `expected`: Ang elementong paghahambingan ng bawat item sa array.

### Lokal na pag-import ng function

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areEqual(value, expected)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:52:27 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>