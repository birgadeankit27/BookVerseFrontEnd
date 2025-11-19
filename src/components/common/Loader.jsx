import React from 'react'

export function Loader({ size = 'md', variant = 'spinner', text = null }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-5 h-5 border-2.5',
    lg: 'w-6 h-6 border-4',
  }

  const sizeClass = sizes[size] || sizes.md

  if (variant === 'dots') {
    return (
      <div className="inline-flex items-center gap-1">
        <span
          className="inline-block w-2 h-2 rounded-full bg-current animate-bounce"
          style={{ animationDelay: '0s' }}
        />
        <span
          className="inline-block w-2 h-2 rounded-full bg-current animate-bounce"
          style={{ animationDelay: '0.15s' }}
        />
        <span
          className="inline-block w-2 h-2 rounded-full bg-current animate-bounce"
          style={{ animationDelay: '0.3s' }}
        />
        {text && <span className="ml-2 text-sm">{text}</span>}
      </div>
    )
  }

  return (
    <span className="inline-flex items-center">
      <svg
        className={`${sizeClass} animate-spin text-current`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>

      {text && <span className="ml-2 text-sm">{text}</span>}
    </span>
  )
}

// Use example:

// <Button label="Submit" variant="primary" onClick={() => console.log('clicked')} />

// <Button loading label="Saving..." />

// <Loader variant="dots" />