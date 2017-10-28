import React from 'react'
import Normalize from './styles/normalize'

const Page = ({children, alt}) => (
  <div className='Page'>
    {children}

    <Normalize />

    <style jsx>{`
      .Page {
        min-height: 100vh;
        padding-bottom: 32px;
        background-color: #fcfcfd;
      }
    `}</style>

    <style jsx global>{`
      body,
      h1, h2, h3, h4, h5, h6,
      blockquote, p, pre,
      dl, dd, ol, ul,
      figure,
      hr,
      fieldset, legend {
        margin:  0;
        padding: 0;
      }

      html {
        color: #6b6c6f;
        font-size: 1em;
        line-height: 1.25;
        font-family: Nunito, 'Helvetica Neue', Helvetica, Arial, sans-serif;
        overflow-y: scroll;
      }

      body {
        background: #fff;
        min-height: 100vh;
      }

      a {
        font-weight: 500;
        color: #5b55f7;
        cursor: pointer;
        text-decoration: none;
        transition: color .25s;
      }

      a:hover {
        color: #111;
      }

      h1, h2, h3, h4, h5, h6 {
        color: #333;
        font-weight: 300;
        line-height: 1.333334;
      }
      h1 {
        line-height: 1.25;
      }

      h2 {
        line-height: 40px;
      }

      .u-v-separator {
        display: block;
        width: 1px;
        height: 15px;
        background: #2b3537;
      }

      .u-uppercase { text-transform: uppercase; }

      /* Font weight */
      .u-light     { font-weight: 300 }
      .u-regular   { font-weight: 400 }
      .u-medium    { font-weight: 500 }
      .u-semi-bold { font-weight: 600 }
      .u-bold      { font-weight: 700 }

      /* Font sizing */
      .u-alpha   { font-size: 32px !important; line-height: 42px !important; }
      .u-beta    { font-size: 28px !important; line-height: 36px !important; }
      .u-gamma   { font-size: 24px !important; line-height: 32px !important; }
      .u-delta   { font-size: 20px !important; line-height: 28px !important; }
      .u-epsilon { font-size: 18px !important; line-height: 26px !important; }
      .u-zeta    { font-size: 16px !important; line-height: 24px !important; }
      .u-milli   { font-size: 14px !important; line-height: 20px !important; }
      .u-micro   { font-size: 13px !important; line-height: 18px !important; }
      .u-nano    { font-size: 12px !important; line-height: 16px !important; }

      /* Top margin */
      .u-mt\\+\\+\\+ { margin-top: 64px !important; }
      .u-mt\\+\\+    { margin-top: 48px !important; }
      .u-mt\\+       { margin-top: 40px !important; }
      .u-mt          { margin-top: 32px !important; }
      .u-mt-         { margin-top: 24px !important; }
      .u-mt--        { margin-top: 16px !important; }
      .u-mt---       { margin-top: 8px !important; }

      /* Bottom margin */
      .u-mb\\+\\+\\+ { margin-bottom: 64px !important; }
      .u-mb\\+\\+    { margin-bottom: 48px !important; }
      .u-mb\\+       { margin-bottom: 40px !important; }
      .u-mb          { margin-bottom: 32px !important; }
      .u-mb-         { margin-bottom: 24px !important; }
      .u-mb--        { margin-bottom: 16px !important; }
      .u-mb---       { margin-bottom: 8px !important; }

      /* Left margin */
      .u-ml\\+\\+\\+ { margin-left: 64px !important; }
      .u-ml\\+\\+    { margin-left: 48px !important; }
      .u-ml\\+       { margin-left: 40px !important; }
      .u-ml          { margin-left: 32px !important; }
      .u-ml-         { margin-left: 24px !important; }
      .u-ml--        { margin-left: 16px !important; }
      .u-ml---       { margin-left: 8px !important; }

      /* Right margin */
      .u-mr\\+\\+\\+ { margin-right: 64px !important; }
      .u-mr\\+\\+    { margin-right: 48px !important; }
      .u-mr\\+       { margin-right: 40px !important; }
      .u-mr          { margin-right: 32px !important; }
      .u-mr-         { margin-right: 24px !important; }
      .u-mr--        { margin-right: 16px !important; }
      .u-mr---       { margin-right: 8px !important; }

      /* Horizontal margin */
      .u-mh\\+\\+\\+ { margin-right: 64px !important; margin-left: 64px !important; }
      .u-mh\\+\\+    { margin-right: 48px !important; margin-left: 48px !important; }
      .u-mh\\+       { margin-right: 40px !important; margin-left: 40px !important; }
      .u-mh          { margin-right: 32px !important; margin-left: 32px !important; }
      .u-mh-         { margin-right: 24px !important; margin-left: 24px !important; }
      .u-mh-         { margin-right: 24px !important; margin-left: 24px !important; }
      .u-mh--        { margin-right: 16px !important; margin-left: 16px !important; }
      .u-mh---       { margin-right: 8px !important;  margin-left: 8px !important; }

      /* Vertical margin */
      .u-mv\\+\\+\\+ { margin-top: 64px !important; margin-bottom: 64px !important; }
      .u-mv\\+\\+    { margin-top: 48px !important; margin-bottom: 48px !important; }
      .u-mv\\+       { margin-top: 40px !important; margin-bottom: 40px !important; }
      .u-mv          { margin-top: 32px !important; margin-bottom: 32px !important; }
      .u-mv-         { margin-top: 24px !important; margin-bottom: 24px !important; }
      .u-mv-         { margin-top: 24px !important; margin-bottom: 24px !important; }
      .u-mv--        { margin-top: 16px !important; margin-bottom: 16px !important; }
      .u-mv---       { margin-top: 8px !important;  margin-bottom: 8px !important; }

      /* Top padding */
      .u-pt\\+\\+\\+ { padding-top: 64px !important; }
      .u-pt\\+\\+    { padding-top: 48px !important; }
      .u-pt\\+       { padding-top: 40px !important; }
      .u-pt          { padding-top: 32px !important; }
      .u-pt-         { padding-top: 24px !important; }
      .u-pt--        { padding-top: 16px !important; }
      .u-pt---       { padding-top: 8px !important; }

      /* Bottom padding */
      .u-pb\\+\\+\\+ { padding-bottom: 64px !important; }
      .u-pb\\+\\+    { padding-bottom: 48px !important; }
      .u-pb\\+       { padding-bottom: 40px !important; }
      .u-pb          { padding-bottom: 32px !important; }
      .u-pb-         { padding-bottom: 24px !important; }
      .u-pb--        { padding-bottom: 16px !important; }
      .u-pb---       { padding-bottom: 8px !important; }

      /* Left padding */
      .u-pl\\+\\+\\+ { padding-left: 64px !important; }
      .u-pl\\+\\+    { padding-left: 48px !important; }
      .u-pl\\+       { padding-left: 40px !important; }
      .u-pl          { padding-left: 32px !important; }
      .u-pl-         { padding-left: 24px !important; }
      .u-pl--        { padding-left: 16px !important; }
      .u-pl---       { padding-left: 8px !important; }

      /* Right padding */
      .u-pr\\+\\+\\+ { padding-right: 64px !important; }
      .u-pr\\+\\+    { padding-right: 48px !important; }
      .u-pr\\+       { padding-right: 40px !important; }
      .u-pr          { padding-right: 32px !important; }
      .u-pr-         { padding-right: 24px !important; }
      .u-pr--        { padding-right: 16px !important; }
      .u-pr---       { padding-right: 8px !important; }

      /* Horizontal padding */
      .u-ph\\+\\+\\+ { padding-right: 64px !important; padding-left: 64px !important; }
      .u-ph\\+\\+    { padding-right: 48px !important; padding-left: 48px !important; }
      .u-ph\\+       { padding-right: 40px !important; padding-left: 40px !important; }
      .u-ph          { padding-right: 32px !important; padding-left: 32px !important; }
      .u-ph-         { padding-right: 24px !important; padding-left: 24px !important; }
      .u-ph-         { padding-right: 24px !important; padding-left: 24px !important; }
      .u-ph--        { padding-right: 16px !important; padding-left: 16px !important; }
      .u-ph---       { padding-right: 8px !important;  padding-left: 8px !important; }

      /* Vertical padding */
      .u-pv\\+\\+\\+ { padding-top: 64px !important; padding-bottom: 64px !important; }
      .u-pv\\+\\+    { padding-top: 48px !important; padding-bottom: 48px !important; }
      .u-pv\\+       { padding-top: 40px !important; padding-bottom: 40px !important; }
      .u-pv          { padding-top: 32px !important; padding-bottom: 32px !important; }
      .u-pv-         { padding-top: 24px !important; padding-bottom: 24px !important; }
      .u-pv-         { padding-top: 24px !important; padding-bottom: 24px !important; }
      .u-pv--        { padding-top: 16px !important; padding-bottom: 16px !important; }
      .u-pv---       { padding-top: 8px !important;  padding-bottom: 8px !important; }

      /* Text align */
      .u-ta-l { text-align: left !important; }
      .u-ta-c { text-align: center !important; }
      .u-ta-r { text-align: right !important; }
    `}</style>
  </div>
)

export default Page
