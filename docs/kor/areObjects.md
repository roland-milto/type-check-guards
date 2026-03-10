# areObjects

## 설명

`areObjects`는 제공된 채워진 배열이 객체만 포함하는지 확인합니다.

### 사용 사례

`areObjects`는 알 수 없는 배열(예: JSON 파싱 또는 외부 API에서 받은 값)을 받았을 때, 반복 처리하며 객체 속성에 접근하기 전에 비어 있지 않고 모든 요소가 객체인지 확인해야 하는 경우에
사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `areObjects`를 사용해 `unknown[]`를 항목을 객체로 취급하기 전에 검증하세요. 빈 배열에 대해서는 `false`를 반환합니다.

### 장점

- 입력이 채워진 배열이고 모든 요소가 객체일 때만 `true`를 반환합니다.
- 객체가 아닌 요소가 발견되는 즉시 조기에 중단하고 `false`를 반환합니다.
- 객체 전용 작업을 수행하기 전에 알 수 없는 입력을 검증하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `areObjects(array)`

매개변수:

- `array`: 객체 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value는 객체로 채워진 배열입니다
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areObjects(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:09:17 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>