import { ContainerMain } from '../containers/containerMain/ContainerMain';
import { StyleFooter } from './StyleFooter';


export function Footer() {
    return(
        <StyleFooter>
            <ContainerMain>
                <p>&copy; Kenzie Contatos.</p>
                {/* <p>Todos os direitos reservados.</p> */}
            </ContainerMain>
        </StyleFooter>
    )
}