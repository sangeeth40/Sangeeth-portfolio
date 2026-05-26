import { useEffect, useRef, useCallback } from "react";
import type { CSSProperties } from "react";

// ─── Constants ─────────────────────────────────────────────────────────────────

const SIZE = 96; // cube edge length in px
const HALF = SIZE / 2;
const AUTO_SPEED = 0.4; // deg/frame during idle spin
const REST_TILT = -18; // natural X-axis resting angle
const FRICTION = 0.91; // per-frame velocity decay after release
const RESUME_DELAY_MS = 2500; // ms of inactivity before auto-spin resumes

// Shared absolute-position style applied to every face
const FACE_BASE: CSSProperties = {
  position: "absolute",
  width: SIZE,
  height: SIZE,
  top: 0,
  left: 0,
};

// Each face: its CSS transform within preserve-3d space, border and background colours
const FACES = [
  {
    transform: `translateZ(${HALF}px)`,
    border: "rgba(99,102,241,0.60)",
    bg: "rgba(99,102,241,0.05)",
  },
  {
    transform: `rotateY(180deg) translateZ(${HALF}px)`,
    border: "rgba(99,102,241,0.48)",
    bg: "rgba(99,102,241,0.04)",
  },
  {
    transform: `rotateY(-90deg) translateZ(${HALF}px)`,
    border: "rgba(139,92,246,0.60)",
    bg: "rgba(139,92,246,0.05)",
  },
  {
    transform: `rotateY(90deg)  translateZ(${HALF}px)`,
    border: "rgba(139,92,246,0.48)",
    bg: "rgba(139,92,246,0.04)",
  },
  {
    transform: `rotateX(-90deg) translateZ(${HALF}px)`,
    border: "rgba(34,211,238,0.60)",
    bg: "rgba(34,211,238,0.05)",
  },
  {
    transform: `rotateX(90deg)  translateZ(${HALF}px)`,
    border: "rgba(34,211,238,0.48)",
    bg: "rgba(34,211,238,0.04)",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

/**
 * An interactive 3-D wireframe cube.
 *
 * - Idles with a continuous auto-spin and a gentle resting tilt.
 * - Responds to mouse drag and touch via the Pointer Events API.
 * - Releases with momentum and decelerates under friction before auto-spin resumes.
 * - All animation runs in a requestAnimationFrame loop that writes directly to the
 *   DOM — no React re-renders occur during interaction.
 */
export function RotatingCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Live rotation angles and physics — mutable refs avoid stale closures in the RAF loop
  const rotX = useRef(REST_TILT);
  const rotY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const isAutoSpin = useRef(true);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();
  const rafId = useRef<number>(0);

  // ── Animation loop ──────────────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      if (!isDragging.current) {
        if (isAutoSpin.current) {
          rotY.current += AUTO_SPEED;
          rotX.current += (REST_TILT - rotX.current) * 0.025; // lerp back to resting tilt
        } else {
          rotX.current += velX.current;
          rotY.current += velY.current;
          velX.current *= FRICTION;
          velY.current *= FRICTION;

          const settled =
            Math.abs(velX.current) < 0.05 && Math.abs(velY.current) < 0.05;
          if (settled) isAutoSpin.current = true;
        }
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // ── Pointer handlers ────────────────────────────────────────────────────────

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId); // keeps events firing outside the element
      isDragging.current = true;
      isAutoSpin.current = false;
      velX.current = 0;
      velY.current = 0;
      lastPos.current = { x: e.clientX, y: e.clientY };
      clearTimeout(resumeTimer.current);
      if (containerRef.current) containerRef.current.style.cursor = "grabbing";
    },
    [],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;

      rotX.current -= dy * 0.55;
      rotY.current += dx * 0.55;

      // Blend old and new delta for smoother inertia on release
      velX.current = velX.current * 0.35 + -dy * 0.55 * 0.65;
      velY.current = velY.current * 0.35 + dx * 0.55 * 0.65;

      lastPos.current = { x: e.clientX, y: e.clientY };
    },
    [],
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = "grab";
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      isAutoSpin.current = true;
      velX.current = 0;
      velY.current = 0;
    }, RESUME_DELAY_MS);
  }, []);

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="float-animation flex flex-col items-center gap-3 select-none">
      {/* Perspective container — also the pointer event surface */}
      <div
        ref={containerRef}
        style={{
          width: SIZE,
          height: SIZE,
          perspective: `${SIZE * 6}px`,
          cursor: "grab",
          touchAction: "none",
          userSelect: "none",
        }}
        className="hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.45)] transition-[filter] duration-300"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Rotating inner container */}
        <div
          ref={innerRef}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
          }}
        >
          {FACES.map((face, i) => (
            <div
              key={i}
              style={{
                ...FACE_BASE,
                transform: face.transform,
                border: `1px solid ${face.border}`,
                background: face.bg,
                backdropFilter: "blur(2px)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
