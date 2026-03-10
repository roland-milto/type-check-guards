# arePlainObjects

## 설명

배열의 모든 요소가 순수 객체인지 확인하며, 모든 요소가 조건을 만족할 때만 `true`를 반환합니다.

### 사용 사례

외부 또는 타입이 지정되지 않은 데이터(예: 파싱된 JSON, API 페이로드, 폼 제출)를 검증하여, 반복(iterate)하며 속성을 읽기 전에 모든 항목이 순수 객체인 비어 있지 않은 배열을 받았는지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> TypeScript에서 알 수 없는 입력을 `Record<string, unknown>[]`(또는 더 엄격한 객체 형태)로 다루기 전에 `arePlainObjects`를 사용해 검증하세요.

### 장점

- 입력 배열의 모든 요소가 순수 객체(plain object)인지 보장하며, 모든 항목이 일치할 때만 `true`를 반환합니다.
- `false`를 반환하여 잘못된 입력(배열이 아니거나 빈 배열)을 초기에 거부합니다.
- 객체 리터럴로 만든 객체와 `Object.create(null)`로 만든 객체를 모두 유효한 순수 객체로 취급합니다.

## 사용법

### 문법

함수:

- `arePlainObjects(array)`

매개변수:

- `array`: 순수 객체 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // 참
const b = arePlainObjects([{}, Object.create(null)]); // 참
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // 거짓
const d = arePlainObjects([] as unknown[]); // 거짓
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.arePlainObjects(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 4:54:32 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>