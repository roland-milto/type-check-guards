# isNumber

## Апісанне

`isNumber` правярае, ці з'яўляецца значэнне канечным лікам, не роўным `NaN`.

### Выкарыстанне

Правярайце лікавы ўвод з ненадзейных крыніц (формы, параметры запыту, JSON-нагрузкі) перад вылічэннямі, захаваннем або
праверкамі дыяпазону, каб праходзілі (`true`) толькі канечныя лікі, а ўсё астатняе вяртала `false`.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isNumber`, каб правяраць значэнні тыпу `unknown` перад выкананнем арыфметычных аперацый; ён адхіляе
`NaN`, `Infinity` і `-Infinity`.

### Перавагі

- Вяртае `true` толькі для сапраўдных лікаў JavaScript (праверка тыпу плюс адхіленне `NaN` і бясконцасці).
- Прадухіляе распаўсюджаныя памылкі валідацыі, калі `NaN`, `Infinity` або `-Infinity` выпадкова праходзяць як лікі.
- Добра працуе як runtime-ахоўнік для невядомага ўводу (напрыклад, JSON, увод карыстальніка, знешнія API).
- Простая, хуткая і без пабочных эфектаў.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isNumber(value)`

Параметры:

- `value`: Значэнне для праверкі.

### Лакальны імпарт функцыі

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input — гэта сапраўдны канечны лік
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isNumber(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 13:08:10 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>