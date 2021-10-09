import styled from 'styled-components';

export const FavoritesList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin: 10px 10px 10px 10px;

    li 
    {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 5px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 2px;
        }

        > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 10px;
        }

        button {
            background: #750A7F;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            //margin: 0 auto;
            margin-inline-start: 0;
            margin-bottom: 10px;
            margin-top: 10px;
            padding-top: 10px;
            
            align-items: center;
            
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
            img{
                float: right;
            }

        }

        div{
            display: flex;
            align-items: center;
            justify-content: space-around;

            img{
                cursor: pointer;

                transition: filter 0.2s;

                &:hover {
                    filter: drop-shadow(9px 10px 4px #690972);
                }
            }
        }

        #txtfavorites{
            padding: 5px;
        }
    }
`