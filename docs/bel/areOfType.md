# areOfType

## Апісанне

Правярае, ці ўсе элементы ў зададзеным `array` маюць указаны `type`.

### Выкарыстанне

Выкарыстоўвайце `areOfType`, каб правяраць невядомы ўвод (напрыклад, распарсены JSON, payload API, увод карыстальніка)
перад выкананнем аперацый, спецыфічных для тыпу, над кожным элементам масіва.

> **Падказка для карыстальнікаў TypeScript:**
>
> Паколькі `areOfType` — гэта ахоўнік тыпаў, TypeScript звужае масіў унутры блока `if (areOfType(...)) {}` да
`Array<DataTypeOf<T>>`.

### Перавагі

- Забяспечвае ахоўнік тыпаў TypeScript: калі вяртае `true`, уваход звужаецца да `Array<DataTypeOf<T>>`.
- Правярае кожны элемент на адпаведнасць запытанаму тыпу падчас выканання, не дапускаючы праходжання масіваў са
  змешанымі тыпамі.
- Хутка завяршаецца: вяртае `false`, як толькі знаходзіцца элемент, які не супадае.
- Па задуме адхіляе не-масівы і пустыя масівы (залежыць ад `isFilledArray`).

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areOfType(array, type)`

Параметры:

- `array`: Масіў для праверкі.
- `type`: Тып, з якім трэба параўнаць кожны элемент у масіве.

### Лакальны імпарт функцыі

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values цяпер number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areOfType(array, type)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 17:08:38 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>