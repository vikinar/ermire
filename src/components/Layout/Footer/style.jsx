import css from 'styled-jsx/css'

const style = css`
  footer{
    display: flex;
    position: fixed; 
    bottom: 4rem; 
    height: 10rem;
    z-index: 2;
    width: 100%;
    
    .footer{
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
    
    .social{
        display: flex;
        align-items: center;
        p{
          font-weight: 600;
        }
        a{
          margin-left: 1rem;
          text-decoration: none;
          color: darkblue;
          :before{
            content: '/';
            margin: 0 .5rem;
          }
        }
    }
  }
`

export default style
