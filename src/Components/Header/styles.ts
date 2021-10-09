import styled from 'styled-components';

export const Container =styled.header`
    max-width: 1130px;
    margin: 0 auto; //centralizado
    padding: 2rem;
    display: flex; //alinhado verticalmente ao centro
    align-items: center;
    justify-content: space-between; //um espaço entre todos os itens
    
    

    h1 {
        color: white;
        font-weight: 600;
        float: left;
        height: 49px;
        width: 270px;
        margin-left: -60px;
        
    }

    div {
        text-align: right;
        display: flex;
        


    }
    button{
        font-size: 1rem;
        color: #FFF;
        background: #282828;
        border: 0;
        padding: 0 1rem;
        border-radius: 1rem;
        height: 3rem;
        width: 8rem;

        transition: filter 0.2s;
    
        &:hover{
        filter: brightness(0.9);
        }
    }

    input{
        font-size: 1rem;
    }

#divBusca{
    background-color:#212128;
    border:solid 1px;
    border-radius:15px;
    width:300px;
}

#txtBusca{
    float:left;
    background-color:transparent;
    padding-top: 15px;
    padding-left:5px;
    font-style:italic;
    font-size:17px;
    border:none;
    height:30px;
    width:250px;
    color: white;
    
}

#btnBusca{
    width: 30px;
    cursor: pointer;

    transition: filter 0.2s;
    
        &:hover{
        filter: brightness(0.9);
        }
    
}

#logo{
    width: 50px;
    height: 40px;
    
}
`;


