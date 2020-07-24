import css from "styled-jsx/css";

export const style = css`
main{
   display: flex;
   width:100%;
   justify-content: center;
  .container{
      display: flex;
      flex-direction: column;
      width: 80%;
      &__card{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      .card{
         width: 100%;
         background: rgb(0,0,139);
         background: linear-gradient(135deg, rgba(0,0,139,1) 0%, rgba(0,91,255,1) 100%);
         color: white;
         padding: 2rem;
         border-radius: 1rem;
         box-shadow: 0 0 .5rem rgba(black, .25);
         width: calc(30%);
         &__title{
          font-weight: 500;
         }
         &:not(:last-child){
            margin-right: 1.5rem;
         }
         &:first-child{
          margin-top: 2rem;
         }
         ul{
          list-style: none;
          padding: 0;
          li{
            display: flex;
            align-items: center;
            margin: 1rem;
            .icon{
              color: lightsteelblue;
            }
          }
         }
      }
  }
  }
}
`
