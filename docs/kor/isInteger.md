# isInteger

## 설명

주어진 `value`가 안전한 정수 숫자인지 여부를 판별합니다.

### 사용 사례

신뢰할 수 없는 입력(예: 쿼리 파라미터, JSON 페이로드, 환경 변수)을 배열 인덱스, 페이지네이션, 카운터 또는 데이터베이스 ID를 위한 정수로 사용하기 전에 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isInteger`를 사용해 알 수 없는 입력을 숫자 정수로 취급하기 전에 검증하세요. 이 함수는 `typeof value === "number"`이고 `Number.isSafeInteger(value)`인
> 값에 대해서만 `true`를 반환합니다.

### 장점

- 타입과 숫자 안전성을 모두 확인합니다: 입력이 숫자이면서 안전한 정수일 때만 `true`를 반환합니다.
- 숫자 강제 변환으로 인한 흔한 함정을 방지합니다: "5" 같은 문자열은 올바르게 `false`를 반환합니다.
- 정수가 아닌 값과 안전하지 않은 정수를 거부하므로 ID, 카운터, 배열 인덱싱에 적합합니다.

## 사용법

### 문법

함수:

- `isInteger(value)`

매개변수:

- `value`: 정수 여부를 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // 참
const b = isInteger(-100);   // 참
const c = isInteger("5");    // 거짓
const d = isInteger(5.5);    // 거짓
const e = isInteger(null);   // 거짓

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isInteger(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:50:23 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>