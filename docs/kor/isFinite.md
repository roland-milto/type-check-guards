# isFinite

## 설명

주어진 `value`가 유한한 `number`인지 여부를 판별합니다.

### 사용 사례

숫자 계산을 수행하기 전에 (예: JSON, 폼, 또는 API에서 온) 알 수 없는 입력을 검증하여, 해당 값이 실제로 유한한 숫자인지 보장하기 위해 `isFinite`를 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isFinite`는 유한한 숫자에 대해서만 `true`를 반환하며, `NaN`, `Infinity`, 그리고 숫자가 아닌 모든 값에 대해서는 `false`를 반환합니다.

### 장점

- 신뢰할 수 있는 유한성 검사를 위해 내장된 `Number.isFinite`를 사용합니다.
- 유한한 숫자에 대해서만 `true`를 반환하며, `NaN`, `Infinity`, 그리고 숫자가 아닌 입력에 대해서는 `false`를 반환합니다.
- 검증 및 가드 로직에 적합한, 단순하고 부작용이 없는 프레디케이트입니다.

## 사용법

### 문법

함수:

- `isFinite(value)`

매개변수:

- `value`: 유한한지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers는: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // 여기서 value는 유한한 숫자입니다
  const doubled = value * 2;
  console.log(doubled);
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isFinite(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 4:30:26 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>