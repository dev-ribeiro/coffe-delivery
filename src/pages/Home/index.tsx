import { CoffeeApresentation } from "./components/CoffeeApresentation";
import { CoffeeStrore } from "./components/CoffeeStore";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <CoffeeApresentation/>
            <CoffeeStrore/>
        </HomeContainer>
    )
}
