import React from 'react';

const Arrow: React.FC<{className:string}> = ({className}) => {
  return (
    <svg className={className} width="131" height="136" viewBox="0 0 131 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6507 43.2949C32.4339 30.7255 51.9743 23.0115 72.683 28.6293C91.3749 33.7001 103.143 49.6308 90.5396 69.3323C84.5735 78.6586 71.8706 85.1866 61.8852 79.874C50.7606 73.9554 59.5288 59.017 66.6505 54.7089C83.2839 44.6468 106.696 49.3237 118.212 68.8676C131.849 92.0121 108.785 103.532 108.769 103.344" stroke="black" strokeWidth="3.37884" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.2691 18.3822C19.8783 20.8066 19.5266 23.2337 19.2871 25.6772C18.5016 33.7008 15.3562 42.0309 9.71249 47.2933C17.1389 44.0371 27.7931 42.619 34.5383 48.3347" stroke="black" strokeWidth="3.37884" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Arrow;