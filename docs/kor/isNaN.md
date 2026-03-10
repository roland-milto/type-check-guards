# isNaN

## 설명

문자열을 변환하지 않고 제공된 `value`가 `number` 타입의 `NaN`인지 판별합니다.

### 사용 사례

신뢰할 수 없거나 느슨하게 타입이 지정된 입력(예: API 페이로드, 폼 값, 파싱된 JSON)을 검증하여 특수 값 `NaN`을 감지하고 이를 명시적으로 처리하되, 숫자가 아닌 입력은 `NaN`이 아닌 것으로
취급합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 입력이 실제로 `number`인지(문자열을 숫자로 변환하지 않음) 보장하면서 특수한 숫자 값 `NaN`을 감지해야 할 때 `isNaN`을 사용하세요.

### 장점

- 숫자가 아닌 값(예: 문자열)을 숫자로 강제 변환하지 않고 값이 `NaN`인지 확인합니다.
- `number` 타입이면서 동시에 `NaN`인 값에 대해서만 `true`를 반환합니다.
- `unknown` 입력에 대해 안전하며 암묵적 변환으로 인한 오탐을 피합니다.

## 사용법

### 문법

함수:

- `isNaN(value)`

매개변수:

- `value`: `number` 타입의 `NaN`인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // 참
console.log(isNaN(b)); // 거짓
console.log(isNaN(c)); // 거짓

if (isNaN(a)) {
  // a는 숫자이며 특히 NaN이다
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isNaN(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 3:46:45 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>