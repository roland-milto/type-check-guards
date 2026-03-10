# areNumerics

## Апісанне

`areNumerics` правярае, ці з’яўляецца значэнне непустым масівам, у якім усе элементы — лікавыя.

### Выкарыстанне

Выкарыстоўвайце `areNumerics` для праверкі знешніх або нетыпізаваных даных (напрыклад, JSON-пэйлоадаў, параметраў
запыту, уводу формы) перад вылічэннем сум, сярэдніх значэнняў або іншых лікавых аперацый, каб гарантаваць, што ўваход —
непусты лікавы масіў, і ў адваротным выпадку вяртаць `false`.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areNumerics`, каб абараніць уваходныя даныя тыпу `unknown` перад тым, як разглядаць іх як лікавы
> масіў; яна вяртае `false` для немасіваў і пустых масіваў.

### Перавагі

- Вяртае `true` толькі тады, калі ўваходнае значэнне — непусты масіў і кожны элемент з’яўляецца лікавым.
- Хутка спыняецца: перастае правяраць адразу пасля знаходжання нелікавага элемента, вяртаючы `false`.
- Дапамагае бяспечна правяраць невядомае ўваходнае значэнне перад выкананнем лікавых аперацый.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areNumerics(array)`

Параметры:

- `array`: Масіў, які трэба праверыць на лікавыя элементы.

### Лакальны імпарт функцыі

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // праўда
console.log(areNumerics(b)); // праўда
console.log(areNumerics(c)); // няпраўда
console.log(areNumerics(d)); // няпраўда
console.log(areNumerics(e)); // няпраўда

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areNumerics(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Файл быў створаны 6 February 2026 at 16:04:05 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>