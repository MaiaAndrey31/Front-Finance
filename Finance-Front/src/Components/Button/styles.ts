import styled, { css } from "styled-components";
import { theme } from "../../styles/themes";

type ContainerProps = {
    $variant: 'default' | 'outline'
}

export const Container = styled.button<ContainerProps>`
display: flex;
align-items:  center;
justify-content: center;
height: 2.25rem;
border-radius: 0.25rem;
background-color: ${(props) => props.$variant === 'default' ? theme.colors.primary : 'transparent'};
color: ${(props) => props.$variant === 'default' ? theme.colors.black : theme.colors.primary};
border: 0;
padding: 0.75rem;
transition: all 200ms;


&:hover {
    background-color: ${theme.colors.primaryDark};
}

${(props) => props.$variant === 'outline' && css`
    border: 1px solid ${theme.colors.primary}
    
    `

    }
`
