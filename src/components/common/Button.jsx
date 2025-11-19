import React from 'react'
import { Loader } from './Loader'

const SIZES = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-5 py-3 text-base rounded-xl',
}

const VARIANTS = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200',
  secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-4 focus:ring-gray-200',
  ghost: 'bg-transparent text-gray-900 hover:bg-gray-100',
  outline: 'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-50',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:ring-red-200',
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  children,
  className = '',
  type = 'button',
  loadingPosition = 'left',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed'
  const sizeClass = SIZES[size] || SIZES.md
  const variantClass = VARIANTS[variant] || VARIANTS.primary

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled}
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
      aria-busy={loading}
    >
      {loading ? (
        <>
          {loadingPosition === 'left' && (
            <Loader size={size === 'sm' ? 'sm' : 'md'} />
          )}
          {label && <span className="opacity-70">{label}</span>}
          {loadingPosition === 'right' && (
            <Loader size={size === 'sm' ? 'sm' : 'md'} />
          )}
        </>
      ) : (
        <>
          {children}
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  )
}


// Use example:

// <Button label="Submit" variant="primary" onClick={() => console.log('clicked')} />

// <Button loading label="Saving..." />

// <Loader variant="dots" />