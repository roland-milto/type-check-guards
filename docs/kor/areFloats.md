# areFloats

## 설명

`areFloats`는 주어진 배열이 채워져 있고 모든 요소가 부동소수점 수인지 확인합니다.

### 사용 사례

JSON, 쿼리 파라미터 또는 외부 API 등에서 `unknown[]`를 받았을 때, 평균, 보간, 통계 계산과 같은 수치 로직을 실행하기 전에 모든 항목이 부동소수점 수인 채워진 배열인지 보장해야 하는 경우
`areFloats`를 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `areFloats`를 사용해 `unknown[]`를 부동소수점만 포함하는 `number[]`로 취급하기 전에 가드하세요. 이 함수는 빈 배열과 부동소수점이 아닌 요소가 하나라도 있는 경우 `false`를
> 반환합니다.

### 장점

- 입력이 비어 있지 않은 배열이며 모든 요소가 부동소수점 수일 때만 `true`를 반환합니다.
- 빠르게 실패합니다: 부동소수점 수가 아닌 요소를 발견하는 즉시 `false`를 반환합니다.
- 부동소수점 전용 계산을 수행하기 전에 알 수 없는 입력을 검증하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `areFloats(array)`

매개변수:

- `array`: 부동소수점 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // 참
console.log(areFloats(b)); // 거짓
console.log(areFloats(c)); // 거짓

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areFloats(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 3:58:08 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>