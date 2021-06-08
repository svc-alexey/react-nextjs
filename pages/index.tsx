import React, {FunctionComponent, useState} from "react";
import Htag from "./Components/Htag/Htag";
import Button from "./Components/Button/Button";
import Ptag from "./Components/Ptag/Ptag";
import TAG from "./Components/TAG/TAG";
import Rating from "./Components/Rating/Rating";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4);
    return (
        <>
            <Htag tag={'h1'}>Text</Htag>
            <Button inapp={"primary"} arrow={'right'}>Кнопка</Button>
            <Button inapp={"ghost"} arrow={'right'}>Кнопка</Button>

            <Ptag size={'l'}>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills —
                навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и
                маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Ptag>

            <TAG size={'s'} color={'ghost'}>tags</TAG>
            <TAG size={'l'} color={'primary'}>tags</TAG>
            <TAG size={'s'} color={'grey'}>tags</TAG>
            <TAG size={'s'} color={'green'}>tags</TAG>
            <TAG size={'l'} color={'red'}>tags</TAG>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </>
    );
}

export default withLayout(Home);