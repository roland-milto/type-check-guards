# areIntegers

## 설명

`areIntegers`는 주어진 배열의 모든 요소가 정수인지 판단하여, 모두 정수이면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

`areIntegers`는 사용자 제공 데이터나 외부 데이터(예: 쿼리 파라미터, JSON 페이로드, CSV 행)를 검증할 때 사용하세요. 특히 로직에서 ID, 카운터, 페이지네이션 오프셋, 배열 인덱스처럼 정수
값으로 채워진 목록이 필요할 때 유용합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areIntegers`를 `unknown[]` 입력을 `number[]`(정수만 포함)로 다루기 전에 사용하는 런타임 가드로 활용하세요. `false`를 반환하면 입력이 채워진 배열이 아니거나 정수가 아닌 값이
> 하나 이상 포함되어 있다는 뜻입니다.

### 장점

- 모든 요소가 정수일 때만 `true`를 반환하며, 그렇지 않으면 `false`를 반환합니다.
- 정수만 사용하는 연산(예: 인덱싱, 개수 계산, ID 처리)을 수행하기 전에 알 수 없는 입력을 검증하는 데 도움이 됩니다.
- 빠르게 실패합니다: 정수가 아닌 요소를 발견하는 즉시 검사를 중단합니다.

## 사용법

### 문법

함수:

- `areIntegers(array)`

매개변수:

- `array`: 정수 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // 참
console.log(areIntegers(b)); // 참
console.log(areIntegers(c)); // 거짓

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areIntegers(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:59:10 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>