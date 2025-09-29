'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function DebugImage() {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [info, setInfo] = useState({ boxW: 0, boxH: 0, imgW: 0, imgH: 0 });

  useEffect(() => {
    const update = () => {
      const b = boxRef.current;
      const i = imgRef.current;
      setInfo({
        boxW: b?.clientWidth ?? 0,
        boxH: b?.clientHeight ?? 0,
        imgW: i?.clientWidth ?? 0,
        imgH: i?.clientHeight ?? 0,
      });
    };
    update();
    const ro = new ResizeObserver(update);
    if (boxRef.current) ro.observe(boxRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-2 rounded bg-black/80 p-2 text-xs text-white">
        <div>Box: {info.boxW} × {info.boxH}px</div>
        <div>IMG: {info.imgW} × {info.imgH}px</div>
        <div>Tip: if IMG is 0×0, a parent is collapsing height.</div>
      </div>

      {/* BOX — force a visible area so parents can't collapse */}
      <div
        ref={boxRef}
        className="relative mx-auto w-full max-w-3xl rounded-2xl border-2 border-fuchsia-500/60 bg-fuchsia-100/20 p-2"
        style={{ minHeight: 260 }}
      >
        {/* A. Next/Image with fill */}
        <div className="relative h-[240px] w-full overflow-hidden rounded-lg ring-2 ring-blue-500/60">
          <Image
            src="/hero/hero-woman.png"
            alt="debug-next-image"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 48rem, 100vw"
          />
        </div>

        {/* B. Plain <img> fallback to rule out Next/Image */}
        <div className="mt-3 overflow-hidden rounded-lg ring-2 ring-emerald-500/60">
          <img
            ref={imgRef}
            src="/hero/hero-woman.png"
            alt="debug-plain-img"
            style={{ display: 'block', width: '100%', height: 240, objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
