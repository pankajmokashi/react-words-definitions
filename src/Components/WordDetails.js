import {useSelector} from "react-redux";

const WordDetails = () => {
    let {currentSearch} = useSelector((state) => state);

    return(
        <div className="info">
            {
                currentSearch ? 
                currentSearch.map((word, index) => (
                    <div className="word">
                        <div className="title">{word.word}</div>
                        <div className="phoetic">{word.phonetic} </div>
                        <div className="audio">
                        {
                            word.phonetics.map((item) => (
                                <div>
                                    <audio src={item.audio} controls></audio>
                                    <div>{item.text}</div>
                                </div>
                            ))
                        }
                        </div>
                        <div className="meanings">
                        {
                            word.meanings.map((item) => (
                                <div>
                                    <div className="partofSpeech">{item.partOfSpeech}</div>
                                    {
                                        item.definitions.map((line) => (
                                            <li>{line.definition}</li>
                                        ))
                                    }
                                </div>
                            ))
                        }
                        </div>
                    </div>
                )) :
                <div>Nothing to show</div>
            }
        </div>
    )
}

export default WordDetails;