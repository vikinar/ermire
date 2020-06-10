import css from 'styled-jsx/css'

const style = css`
          .header{
            display: flex;
            top: 4rem;
            height: 10rem;
            justify-content: space-between;
            width: 100%;
            background : transparent;
            color: darkblue;
            transition: ease-out .5s;
            position: fixed;
            z-index: 2;
            .flex{
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
            
            &__container{
              &--inner{
              display: flex;
              flex-direction: column;
              flex-basis: content;
              align-items: center;
              justify-content: center;
              margin: 1rem; 
              
              
          h1{
            margin: 0;
            font-size: 1.8rem;
            font-weight: 600;
          }
          p{
              margin: 0;
            }
            }
          }
        }
        
        .logo-container{
          display: flex;
          justify-content: space-between;
        }
        
`

export default style
