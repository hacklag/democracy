import React from 'react'

const Grid = ({children, middle, split, wrap, spacing, className = ''}) => (
  <div
    className={`
      Grid
      ${split ? 'Grid--split' : ''}
      ${middle ? 'Grid--middle' : ''}
      ${wrap ? 'Grid--wrap' : ''}
      ${spacing ? `Grid--${spacing}` : ''}
      ${className}
    `}
  >
    {children}

    <style jsx>{`
      .Grid { display: flex; }
      .Grid--split { justify-content: space-between; }
      .Grid--middle { align-items: center;  }
      .Grid--wrap { flex-wrap: wrap;  }
      .Grid--xs { margin-left: -8px;}
      .Grid--xs > :global(*) { padding-left: 8px; }
      .Grid--md { margin-left: -32px;}
      .Grid--md > :global(*) { padding-left: 32px; }
    `}</style>

    <style jsx global>{`
      .u-1\\/1,
      .u-2\\/2,
      .u-3\\/3,
      .u-4\\/4,
      .u-5\\/5,
      .u-6\\/6,
      .u-7\\/7,
      .u-8\\/8,
      .u-9\\/9,
      .u-10\\/10,
      .u-11\\/11,
      .u-12\\/12 {
        width: 100%;
      }

      .u-1\\/2,
      .u-2\\/4,
      .u-3\\/6,
      .u-4\\/8,
      .u-5\\/10,
      .u-6\\/12 {
        width: 50%;
      }

      .u-1\\/3,
      .u-2\\/6,
      .u-3\\/9,
      .u-4\\/12 {
        width: 33.3333333333%;
      }
      .u-2\\/3,
      .u-4\\/6,
      .u-6\\/9,
      .u-8\\/12 {
        width: 66.6666666666%;
      }

      .u-1\\/4,
      .u-2\\/8,
      .u-3\\/12 {
        width: 25%;
      }
      .u-3\\/4,
      .u-6\\/8,
      .u-9\\/12 {
        width: 75%;
      }

      .u-1\\/5,
      .u-2\\/10 {
        width: 20%;
      }
      .u-2\\/5,
      .u-4\\/10 {
        width: 40%;
      }
      .u-3\\/5,
      .u-6\\/10 {
        width: 60%;
      }
      .u-4\\/5,
      .u-8\\/10 {
        width: 80%;
      }

      .u-1\\/6,
      .u-2\\/12 {
        width: 16.6666666666%;
      }
      .u-5\\/6 {
        width: 83.3333333333%;
      }

      .u-1\\/7 {
        width: 14.2857142857%;
      }
      .u-2\\/7 {
        width: 28.5714285714%;
      }
      .u-3\\/7 {
        width: 42.8571428571%;
      }
      .u-4\\/7 {
        width: 57.1428571428%;
      }
      .u-5\\/7 {
        width: 71.4285714285%;
      }
      .u-6\\/7 {
        width: 85.7142857142%;
      }

      .u-1\\/8 {
        width: 12.5%;
      }
      .u-3\\/8 {
        width: 37.5%;
      }
      .u-5\\/8 {
        width: 62.5%;
      }
      .u-7\\/8 {
        width: 87.5%;
      }

      .u-1\\/9 {
        width: 11.1111111111%;
      }
      .u-2\\/9 {
        width: 22.2222222222%;
      }
      .u-4\\/9 {
        width: 44.4444444444%;
      }
      .u-5\\/9 {
        width: 55.5555555555%;
      }
      .u-7\\/9 {
        width: 77.7777777777%;
      }
      .u-8\\/9 {
        width: 88.8888888887%;
      }

      .u-1\\/10 {
        width: 10%;
      }
      .u-3\\/10 {
        width: 30%;
      }
      .u-9\\/10 {
        width: 90%;
      }

      .u-1\\/11 {
        width: 9.0909090909%;
      }
      .u-2\\/11 {
        width: 18.1818181818%;
      }
      .u-3\\/11 {
        width: 27.2727272727%;
      }
      .u-4\\/11 {
        width: 36.3636363636%;
      }
      .u-5\\/11 {
        width: 45.4545454545%;
      }
      .u-6\\/11 {
        width: 54.5454545454%;
      }
      .u-7\\/11 {
        width: 63.6363636363%;
      }
      .u-8\\/11 {
        width: 72.7272727272%;
      }
      .u-9\\/11 {
        width: 81.8181818181%;
      }
      .u-10\\/11 {
        width: 90.9090909090%;
      }

      .u-1\\/12 {
        width: 8.3333333333%;
      }
      .u-5\\/12 {
        width: 41.6666666666%;
      }
      .u-7\\/12 {
        width: 58.33333333333333%;
      }
      .u-10\\/12 {
        width: 83.3333333333%;
      }
      .u-11\\/12 {
        width: 91.6666666666%;
      }
    `}</style>
  </div>
)

export default Grid
