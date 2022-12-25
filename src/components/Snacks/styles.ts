import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1.75rem;

    @mdeia (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`