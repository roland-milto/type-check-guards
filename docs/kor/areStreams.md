# areStreams

## 설명

`areStreams`는 값이 모든 요소가 `Stream`인 채워진 배열인지 여부를 판별합니다.

### 사용 사례

사용자가 제공했거나 동적으로 구성된 컬렉션(예: 여러 파일 읽기 스트림)을 그룹으로 파이핑, 재개(resume) 또는 기타 작업을 수행하기 전에 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areStreams`를 사용해 알 수 없는 입력을 `Stream[]`로 취급하기 전에 검증하세요. 이 함수는 값이 비어 있지 않은 배열이고 모든 요소가 `Stream`일 때만 `true`를 반환합니다.

### 장점

- 입력이 모든 요소가 `Stream`인 채워진 배열인지 보장합니다.
- 처리 전에 스트림 컬렉션을 검증하기 위한 간단한 `true`/`false` 가드를 제공합니다.
- 빠르게 실패합니다: `Stream`이 아닌 요소가 발견되는 즉시 `false`를 반환합니다.
- 코드가 모든 항목이 `Stream` 인스턴스라고 가정할 때 발생할 수 있는 런타임 오류를 방지하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `areStreams(array)`

매개변수:

- `array`: Stream 객체인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input은 Stream 객체로 채워진 배열이다
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areStreams(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:34:23 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>