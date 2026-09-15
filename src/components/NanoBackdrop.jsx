/**
 * Decorative nano-themed background art.
 *
 * Everything here is inline SVG driven by `currentColor` and the accent token,
 * so it costs no image requests, scales cleanly, and recolours with the theme.
 * All of it is purely decorative and hidden from assistive tech.
 *
 * Variants:
 *   hex      graphene-style hexagonal lattice
 *   orbits   concentric orbital rings with electron dots
 *   wafer    concentric arcs suggesting a wafer / diffraction pattern
 *   lattice  staggered atomic dot plane (CSS utility, no SVG)
 */
import { useId } from 'react'

/* Hexagonal (graphene) lattice tile ---------------------------------------- */
function HexLattice({ className = '', opacity = 1 }) {
  // Pattern ids must be unique per instance or a second lattice on the same
  // page would reuse the first one's definition.
  const patternId = `nano-hex-${useId()}`

  return (
    <svg
      className={className}
      aria-hidden="true"
      width="100%"
      height="100%"
      style={{ opacity }}
    >
      <defs>
        {/* A single flat-top hexagon that tiles seamlessly at 56x48. */}
        <pattern
          id={patternId}
          width="56"
          height="48.5"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.15)"
        >
          <path
            d="M28 1 L42 9 L42 25 L28 33 L14 25 L14 9 Z M42 9 L56 1 M42 25 L56 33 M14 9 L0 1 M14 25 L0 33 M28 33 L28 48.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Atom sites at the vertices, so the lattice reads as a material
              rather than plain wireframe. */}
          <g fill="currentColor">
            <circle cx="28" cy="1" r="1.9" />
            <circle cx="42" cy="9" r="1.9" />
            <circle cx="42" cy="25" r="1.9" />
            <circle cx="28" cy="33" r="1.9" />
            <circle cx="14" cy="25" r="1.9" />
            <circle cx="14" cy="9" r="1.9" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

/* Orbital rings ------------------------------------------------------------ */
function Orbits({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 400" className="h-full w-full">
        {/* Static shells */}
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="200" cy="200" r="70" opacity="0.5" />
          <circle cx="200" cy="200" r="118" opacity="0.34" />
          <circle cx="200" cy="200" r="168" opacity="0.2" />
        </g>

        {/* Tilted electron paths, each rotating at its own rate */}
        <g
          className="origin-center animate-spin-slow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <ellipse cx="200" cy="200" rx="168" ry="62" opacity="0.4" />
          <circle cx="368" cy="200" r="4" fill="currentColor" stroke="none" opacity="0.8" />
        </g>

        <g
          className="origin-center animate-spin-slower"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <ellipse
            cx="200"
            cy="200"
            rx="168"
            ry="62"
            opacity="0.32"
            transform="rotate(60 200 200)"
          />
          <circle cx="284" cy="55" r="3.5" fill="currentColor" stroke="none" opacity="0.7" />
        </g>

        {/* Nucleus */}
        <circle cx="200" cy="200" r="7" fill="currentColor" opacity="0.55" />
      </svg>
    </div>
  )
}

/* Wafer / diffraction arcs ------------------------------------------------- */
function Wafer({ className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 300" className="h-full w-full" preserveAspectRatio="none">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          {[40, 90, 140, 190, 240, 290, 340].map((r, index) => (
            <circle
              key={r}
              cx="300"
              cy="300"
              r={r}
              opacity={0.42 - index * 0.05}
              strokeDasharray={index % 2 === 0 ? undefined : '3 7'}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

/**
 * Positioned wrapper. Drop inside a `relative` block; it fills the parent and
 * sits behind the content.
 */
function NanoBackdrop({ variant = 'hex', className = '', tone = 'text-accent/25' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${tone} ${className}`}
    >
      {variant === 'hex' && <HexLattice className="absolute inset-0" />}

      {variant === 'orbits' && (
        <>
          <Orbits className="absolute -right-24 -top-24 h-[420px] w-[420px] animate-drift" />
          <Orbits className="absolute -bottom-40 -left-32 hidden h-[340px] w-[340px] lg:block" />
        </>
      )}

      {variant === 'wafer' && <Wafer className="absolute inset-x-0 bottom-0 h-2/3" />}

      {variant === 'lattice' && <div className="bg-lattice absolute inset-0" />}
    </div>
  )
}

export { HexLattice, Orbits, Wafer }
export default NanoBackdrop
