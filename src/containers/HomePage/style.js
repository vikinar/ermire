import css from 'styled-jsx/css'

const posterBG = 'posterBg'
const chat= 'chat'
const chatLeft= 'chatLeft'
const poster = 'poster'
const sky = 'sky'
const tree  = 'tree'
const opacity = 'opacity'
const fade = 'fade'

const style = css`
          .home{
            margin: 0;
            padding: 0;
            grid-column: span 11;
          }
          
          .header{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            width: 100%;
            background : transparent;
            color: darkblue;
            transition: ease-out .5s;
            
            &__order{
              position: relative;
              padding: 2rem 1rem;
              color: white;
              width: 33%; 
              text-align: center;
              cursor: pointer; 
              overflow: hidden;
              z-index: 1;
              transition: .75s cubic-bezier(0.7, 0.2, 0.1, 1);
              :hover{
                color: transparent;
              }
              :hover::after{
                transform: translateX(-100%);
                transition: .75s cubic-bezier(0.7, 0.2, 0.1, 1);
              }
              
              :hover::before{
                transform: translateX(0%);
                transition: .75s cubic-bezier(0.7, 0.2, 0.1, 1);
              }
              &::after{
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: darkblue;
                z-index: -1;
                transform: translate(0);
                transition: .75s cubic-bezier(0.7, 0.2, 0.1, 1)
              }
              &::before{
                content: attr(data-text);
                position: absolute;
                color: darkblue;
                background: transparent;
                font-size: 4rem;
                font-weight: 900;
                display: flex;
                align-items: center;
                justify-content: center;
                vertical-align: center;
                top: 1.5rem;
                left: 0;
                z-index: 1;
                transform: translateX(-100%);
                transition: .75s cubic-bezier(0.7, 0.2, 0.1, 1)
              }
            }
            
            &__content{
              display: flex;
              height: 100%;
            }
            
            &-title--cont{
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 50%;
              transition: ease-out .5s;
              color: black;
              p{
                width: 90%;
                line-height: 2.8rem;
                font-size: 2rem;
                margin: 1rem 0;
              }
              
              .divider{
                display: block;
                height: .5rem;
                width: 30%;
                background: darkblue;
                margin: .5rem 0;
              }
            }
            
            &-title{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 90%;
              font-size: 6rem; 
              font-weight: 700; 
              position: relative;
              transition: ease-out .5s;
              margin: 0;
            }
            
            &__poster{
            display: flex;
              position: relative;
              width: 50%;
              height: 100%;
              align-items: center;
            }
          }
          
          .overview{
            height: 100vh;
            width: 100%;
            background: #eee;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(12, 1fr);
            grid-column-gap: 1em;
            grid-row-gap: 1em;
          }
                    
          .logo-container{
            display: flex;
            flex-basis: content;
            justify-content: space-between;
            align-items: center;
            justify-content: center;
          }
          
          .logo-container-inner{
              margin: 1rem;
          }
          
          .logo-desc{
            margin: 0;
          }
          h1{
            margin: 0;
            font-size: 1.8rem;
            font-weight: 600;
          }
          :global(.fp-tableCell){
            display: flex !important;
          }
          
          :global(.poster){
             transition: cubic-bezier(0.2, 0.5, 0.75, 1);
             backface-visibility: hidden;
             animation: poster 1s forwards cubic-bezier(0.7, 0.2, 0.1, 1);
             @keyframes ${poster}{
              from{           
                opacity: 0;
                transform: translateY(10%);
              } to {
                opacity: 1;
                transform: translateY(0%);
              }
             }
          }
          
          :global(.posterBg){
             position: absolute;
             top: 20rem;           
             left: -5rem;
             transition: cubic-bezier(0.2, 0.5, 0.75, 1);
             backface-visibility: hidden;
             animation: poster 1s forwards cubic-bezier(0.7, 0.2, 0.1, 1);
             @keyframes ${poster}{
              from{           
                opacity: 0;
                transform: translateY(10%);
              } to {
                opacity: 1;
                transform: translateY(0%);
              }
             }
          }
          
          :global(.chat){
             transform-origin: center;
             backface-visibility: hidden;
             //animation: chat 1s .5s backwards cubic-bezier(0.2, 0.5, 0.75, 1.5);
          
            @keyframes ${chat}{
              from{
              opacity: 0;
                transform: translateX(25%) scale(0);
              } to {
                opacity: 1;
                transform: translateX(0%) scale(1);
              }
            }
            
            @keyframes ${chatLeft}{
              from{
              opacity: 0;
                transform: translateX(-25%) scale(0);
              } to {
                opacity: 1;
                transform: translateX(0%) scale(1);
              }
            }
          }
          
          :global(#a31b832d-1e0d-43ba-bec9-5cfdb815a07f){
            filter: shadow(1rem 1rem 2rem rgba(0,0,0,.5));
            transform-origin: center;
            backface-visibility: hidden;
            animation: chat .75s 0.5s backwards cubic-bezier(0.2, 0.5, 0.75, 1.5);
          }
          
          :global(#eaba0afd-ea5a-4b07-ba58-47cb2f088590){
            transform-origin: center;
            backface-visibility: hidden;
            animation: chatLeft .75s 1s backwards cubic-bezier(0.2, 0.5, 0.75, 1.5);
          }
          
          :global(#e19c349d-f602-4dbb-bd7e-4a25eb582d83){
            transform-origin: center;
            backface-visibility: hidden;
            animation: chat .75s 1.5s backwards cubic-bezier(0.2, 0.5, 0.75, 1.5);
          }
          
          :global(#poster-bg){
          display: none;
           backface-visibility: hidden;
            animation: posterBg .5s backwards cubic-bezier(0.2, 0.5, 0.75, 1);
            
            @keyframes ${posterBG}{
              from{
                opacity: 0;
              } to {
                opacity: 1;
              }
            }
          }
          
          .order{
            align-items: center;
          }
          
          .section-c{
            background: white;
            height: 100%;
          }
          
          .brief{
            display: flex;
            height: 100%;
            align-items: center;
            background: white;
            width: 100%;
            &-block{
              display:flex;
              flex-direction: column;
              width: 50%;
            }
            &__title{
            h1{
              font-size: 5.4rem;
              font-weight: 400;
              margin-bottom: 2rem;
              }
            }
              &__form{
                display:flex;
                flex-direction: column;
                width: 100%;
              &__input{
                margin-bottom: 1rem;
                font-size: 1.6rem;
                padding: 1.5rem;
                border: none;
                outline: none;
                background: transparent;
                border-bottom: 1px solid rgba(darkblue, .5);
                transition: all .5s ease-out;
                resize: none;
                font-family: 'canada-type-gibson', Monospaced, sans-serif;
                :focus{
                  border-bottom: 1px solid darkblue;
                  transition: all .5s ease-out;
                }
              }
              
              &__submit{
                border: none;
                background: darkblue;
                color: white;
                padding: 1rem;
                font-size: 1.6rem;
                outline: none;
                mso-highlight: transparent;
                cursor: pointer;
              }
            }
          }  
              
              .scroll-nav{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                backface-visibility: hidden;
                p{
                   position: relative;
                   writing-mode: vertical-lr;
                   margin: 0;
                   backface-visibility: hidden;
                   animation: fade .5s 2s backwards ease-in-out;
                    &::after{
                      position: absolute;
                      content: '';
                      width: .2rem;
                      height: 40rem;
                      background: darkblue;
                      left: 50%;
                      backface-visibility: hidden;
                      transform: translate(-50%, 1rem );
                      animation: scroll 1.5s 2s infinite alternate backwards ease-in-out;
                    }
                }
              }
              
              @keyframes scroll{
                from{
                  height: 20rem;
                }to{
                  height: 40rem;
                }
              }
              
               @keyframes ${sky}{
                from{
                  transform: translate(20%, -30%);
                }to{
                  transform: translate(0%, -30%);
                }
              }
              
              @keyframes opacity{
                from{
                  opacity: 1;
                  transform: translateY(25%);
                }to{
                  opacity: 0;
                  transform: translateY(0);
                }
              }
              
             @keyframes fade{
                from{
                  opacity: 0;
                }to{
                  opacity: 1;
                }
              }
            
              :global(.cls-1){
                animation: sky 5s .5s infinite alternate forwards ease-in-out;
              } 
              
              .opacity{
                opacity: 1;
                backface-visibility: hidden;
                animation: opacity .75s backwards cubic-bezier(0.2, 0.5, 0.3, 1);
              }
              
              .fade{
                opacity: 1;
                backface-visibility: hidden;
                animation: fade .75s backwards cubic-bezier(0.2, 0.5, 0.3, 1);
              }
              
              .active .overview{
                opacity: 1;
                backface-visibility: hidden;
                transition: .5s cubic-bezier(0.2, 0.5, 0.3, 1);
              }
              
`;
export default style
