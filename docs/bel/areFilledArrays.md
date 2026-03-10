# areFilledArrays

## Апісанне

`areFilledArrays` правярае, ці не пусты двухмерны масіў і ці не пустыя ўсе яго падмасівы.

### Выкарыстанне

Выкарыстоўвайце `areFilledArrays`, каб правяраць таблічны або матрычны ўвод (напрыклад, радкі CSV, даныя сеткі,
згрупаваныя вынікі), каб можна было бяспечна меркаваць, што існуе хаця б адзін падмасіў і ніводзін з падмасіваў не
пусты.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areFilledArrays`, калі трэба ўпэўніцца, што 2D-масіў мае хаця б адзін радок і кожны радок мае хаця б
> адзін элемент перад ітэрацыяй або індэксаваннем.

### Перавагі

- Правярае, што знешні масіў не пусты і што кожны ўнутраны масіў таксама не пусты, вяртаючы `true` толькі тады, калі
  выконваюцца абедзве ўмовы.
- Працуе з любымі тыпамі элементаў у падмасівах (напрыклад, лікі, радкі, аб’екты, укладзеныя масівы), бо правярае толькі
  стан «запоўненасці» масіваў, а не змесціва элементаў.
- Дае просты булеў вынік (`true`/`false`), прыдатны для ахоўных праверак перад апрацоўкай двухмерных даных.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areFilledArrays(array)`

Параметры:

- `array`: Двухмерны масіў для праверкі.

### Лакальны імпарт функцыі

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // праўда
console.log(areFilledArrays(b)); // праўда
console.log(areFilledArrays(c)); // праўда
console.log(areFilledArrays(d)); // няпраўда
console.log(areFilledArrays(e)); // няпраўда
console.log(areFilledArrays(f)); // няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areFilledArrays(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Файл быў створаны 6 February 2026 at 11:55:34 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>