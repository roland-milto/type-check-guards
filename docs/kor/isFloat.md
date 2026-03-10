# isFloat

## 설명

`isFloat`는 주어진 `value`가 유한한 부동소수점 숫자(정수가 아닌 `number`)인지 여부를 판단합니다.

### 사용 사례

소수 값이 필요한 사용자 제공 숫자 입력(예: 가격, 측정값, 비율)을 검증하고 정수, `NaN`, 무한대를 거부합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 유한한 비정수 숫자 입력만 허용해야 할 때 `isFloat`를 사용하세요. 정수와 유한하지 않은 숫자는 거부합니다.

### 장점

- 유한한 비정수 숫자에 대해서만 `true`를 반환합니다(정수, `NaN`, `Infinity`, `-Infinity`는 제외).
- 어떤 입력 타입(`unknown`)에도 동작하며 `typeof value === "number"`를 확인하여 안전하게 타입을 좁힙니다.
- 예측 가능한 동작을 위해 내장 숫자 가드(`Number.isInteger`, `Number.isFinite`)를 사용합니다.

## 사용법

### 문법

함수:

- `isFloat(value)`

매개변수:

- `value`: 부동소수점 숫자인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // 값은 런타임에서 숫자이며, 유한하고 정수가 아니다
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isFloat(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 4:08:23 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>