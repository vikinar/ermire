import css from 'styled-jsx/css'
const logo = 'logo'
    const style = css
        `
    *,
    :global(html), 
    :global(body) {
        margin: 0;
        padding: 0;
        -webkit-touch-callout: none; /* iOS Safari */
        user-select: none;
        font-family: 'canada-type-gibson', Monospaced, sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        transition: all .5s ease-out;
    }


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  transition: all .5s ease-out;
}

:global(html) {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

:global(body) {
 font-size: 1.6rem;
}

    :global(.col-1){
      width: calc(100vw/12);
      width: calc(100vw/12);
    }

    :global(h1){
        
    }
    
         :global(.logo){
            fill: darkblue;
            stroke: darkblue;
            stroke-width: 4px;
            stroke-linejoin: round;
            animation: logo 1.5s 1s backwards cubic-bezier(0.3, 0, 0.75, 1);
            backface-visibility: hidden;
            align-items: flex-end;
        }
        
        @keyframes ${logo} {
        0%{
            fill: transparent;
            stroke-dasharray: 600;
            stroke-dashoffset: 600px;
        }

        80%{
            fill: transparent;
            stroke-dasharray: 600;
        }


        100%{
            fill: darkblue;
            stroke-dashoffset: 0;
            stroke: darkblue;
        }
    }
    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/0d8f4c/00000000000000003b9b3882/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/0d8f4c/00000000000000003b9b3882/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/0d8f4c/00000000000000003b9b3882/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 700;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/0618db/00000000000000003b9b3883/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"), url("https://use.typekit.net/af/0618db/00000000000000003b9b3883/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"), url("https://use.typekit.net/af/0618db/00000000000000003b9b3883/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 700;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/b67c91/00000000000000003b9b387d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"), url("https://use.typekit.net/af/b67c91/00000000000000003b9b387d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"), url("https://use.typekit.net/af/b67c91/00000000000000003b9b387d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 400;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/7557c8/00000000000000003b9b3878/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff2"), url("https://use.typekit.net/af/7557c8/00000000000000003b9b3878/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff"), url("https://use.typekit.net/af/7557c8/00000000000000003b9b3878/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 200;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/7f7817/00000000000000003b9b3879/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff2"), url("https://use.typekit.net/af/7f7817/00000000000000003b9b3879/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff"), url("https://use.typekit.net/af/7f7817/00000000000000003b9b3879/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 200;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/ef2129/00000000000000003b9b387c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"), url("https://use.typekit.net/af/ef2129/00000000000000003b9b387c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"), url("https://use.typekit.net/af/ef2129/00000000000000003b9b387c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/403911/00000000000000003b9b3880/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"), url("https://use.typekit.net/af/403911/00000000000000003b9b3880/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"), url("https://use.typekit.net/af/403911/00000000000000003b9b3880/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 600;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/28537c/00000000000000003b9b3881/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"), url("https://use.typekit.net/af/28537c/00000000000000003b9b3881/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"), url("https://use.typekit.net/af/28537c/00000000000000003b9b3881/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 600;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/e18217/00000000000000003b9b3876/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n1&v=3") format("woff2"), url("https://use.typekit.net/af/e18217/00000000000000003b9b3876/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n1&v=3") format("woff"), url("https://use.typekit.net/af/e18217/00000000000000003b9b3876/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n1&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 100;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/97a068/00000000000000003b9b3877/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i1&v=3") format("woff2"), url("https://use.typekit.net/af/97a068/00000000000000003b9b3877/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i1&v=3") format("woff"), url("https://use.typekit.net/af/97a068/00000000000000003b9b3877/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i1&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 100;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/aa1d64/00000000000000003b9b387a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"), url("https://use.typekit.net/af/aa1d64/00000000000000003b9b387a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"), url("https://use.typekit.net/af/aa1d64/00000000000000003b9b387a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 300;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/32c9ba/00000000000000003b9b3f02/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"), url("https://use.typekit.net/af/32c9ba/00000000000000003b9b3f02/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"), url("https://use.typekit.net/af/32c9ba/00000000000000003b9b3f02/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 300;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/aee0aa/00000000000000003b9b3f03/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"), url("https://use.typekit.net/af/aee0aa/00000000000000003b9b3f03/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"), url("https://use.typekit.net/af/aee0aa/00000000000000003b9b3f03/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/5fead8/00000000000000003b9b387f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"), url("https://use.typekit.net/af/5fead8/00000000000000003b9b387f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"), url("https://use.typekit.net/af/5fead8/00000000000000003b9b387f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 500;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/fd8f97/00000000000000003b9b3884/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"), url("https://use.typekit.net/af/fd8f97/00000000000000003b9b3884/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"), url("https://use.typekit.net/af/fd8f97/00000000000000003b9b3884/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");
        font-display: swap;
        font-style: normal;
        font-weight: 900;
    }

    @font-face {
        font-family: "canada-type-gibson";
        src: url("https://use.typekit.net/af/3513a1/00000000000000003b9b3885/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff2"), url("https://use.typekit.net/af/3513a1/00000000000000003b9b3885/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff"), url("https://use.typekit.net/af/3513a1/00000000000000003b9b3885/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("opentype");
        font-display: swap;
        font-style: italic;
        font-weight: 900;
    }

    .tk-canada-type-gibson {
        font-family: "canada-type-gibson", sans-serif;
    }
`;

export default style
