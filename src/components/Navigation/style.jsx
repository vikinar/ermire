import css from 'styled-jsx/css'

const hover = 'hover'

export const style = css`
.nav{
    display: flex;
    position: sticky;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    border-bottom: darkblue;
    z-index: 1;
    height: 100vh;
    border-left: solid 1px darkblue;
    width: calc(100vw/18);
    min-width: calc(100vw/18);
    transition: cubic-bezier(0.2, 0.5, 0.75, 1.8);
}

    :global(.nav__hover){
    width: 45%;
             transition: cubic-bezier(0.2, 0.5, 0.75, 1);
             backface-visibility: hidden;
             will-change: transform;
             @keyframes ${hover}{
              from{           
                opacity: 0;
                transform: translateX(-50%);
              } to {
                opacity: 1;
                transform: translateX(0%);
              }
        }
    }  
    
    :global(.nav__hover--show){
    will-change: transform;
      animation: hover .5s .5s both ease-out;
    }

.nav ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav ul li{
    text-decoration: none;
    color: #111;
    font-size: 1.6rem;
    text-align: center;
    outline: none;
    transform: rotate(180deg);
    writing-mode: vertical-lr;
    transition: all .5s;
}

.menu-bg{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  background: #fff;
      display: flex;
    align-items: center;
  
  &--show{
  opacity: 1;
  transition: all .5s cubic-bezier(0.6,0.4,0.5,1);
  transform: translateX(0);
  }
  &--hide{
  opacity: 0;
  transition: all .5s cubic-bezier(0.6,0.4,0.5,1);
    transform: translateX(100%);
  }
}

.link {
      backface-visibility: hidden;
      padding: 2rem 4.5rem;
      color: darkblue;
      text-decoration: none;
      display: block;
      margin: 0 auto;
      transform-origin: center;
      transition: all .5s cubic-bezier(0.6, 0, 0.5, 1);
      overflow: hidden;
      font-size: 1.8rem;
    
      &:hover {
        padding-right: 14rem;
        color: transparent;
        transition: all .5s;
      }

      &::after {
        content: attr(data-route);
        position: absolute;
        display: block;
        font-weight: bold;
        color: darkblue;
        word-break: keep-all;
        top: 0;
        right: 70%;
        bottom: 0;
        text-align: right;
        font-size: 10rem;
        writing-mode: horizontal-tb;
        transform-origin: revert;
        transform: translateX(-100%) rotate(180deg);
        text-transform: uppercase;
        will-change: transform;
        transition: all ease-out 1s;
        backface-visibility: hidden;
        opacity: 0;
      }

      &:hover {
        &::after {
          will-change: transform;
          transform: translate(100%) rotate(180deg);
          opacity: 1;
          transition: all .75s cubic-bezier(0.6,0.4,0.5,1);
        }
        
        &.menu-bg{
          transform: translateX(0);
        }
        }
      }
      
      @media only screen and (max-width: 600px){
        
      }
`;
