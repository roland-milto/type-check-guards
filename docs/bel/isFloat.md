# isFloat

## Апісанне

`isFloat` вызначае, ці з’яўляецца зададзенае `value` скончаным лікам з плаваючай коскай (тыпу `number`, які не
з’яўляецца цэлым).

### Выкарыстанне

Валідацыя лікавага ўводу ад карыстальніка, дзе патрабуюцца дробавыя значэнні (напрыклад, цэны, вымярэнні, стаўкі), і
адхіленне цэлых, `NaN` і бясконцасцяў.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isFloat`, калі трэба прымаць толькі скончаныя, нецэлыя лікавыя значэнні; ён адхіляе цэлыя і
> нескончаныя лікі.

### Перавагі

- Вяртае `true` толькі для скончаных, нецэлых лікаў (выключае цэлыя, `NaN`, `Infinity` і `-Infinity`).
- Працуе з любым тыпам уводу (`unknown`) і бяспечна звужае тып, правяраючы `typeof value === "number"`.
- Выкарыстоўвае ўбудаваныя лікавыя ахоўнікі (`Number.isInteger`, `Number.isFinite`) для прадказальных паводзін.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isFloat(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць, ці з’яўляецца яно лікам з плаваючай коскай.

### Лакальны імпарт функцыі

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // значэнне — лік падчас выканання; яно канечнае і не з’яўляецца цэлым
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isFloat(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 16:06:48 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>