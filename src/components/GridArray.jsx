import {useState, React} from 'react';
import { checkImg, checkPos, rotation} from './GameCheckers'
import gameData from './GameData.jsx' //this made the code shorter

function GridArray (props){

  const [data, setData] = useState(gameData);

  //Let's say I'm using the state as a reducer :P Sending 
  const updateState = (e, clickedItem) => {
    const newState = data.map(obj => {
      if (obj.id === clickedItem.id) {
        return {...obj, pos: checkPos(clickedItem.pos)};
      }
      return obj;
    });
    setData(newState);
  }
  
  return (
    <div className={'wrapper-n' + props.size} >
        {data.map(item => (
            <div 
              className='piece' 
              style={rotation(item.pos)}  
              onClick={((e) => updateState(e, item))}>
                <img src={checkImg(item.type)} alt={item.type} />
            </div>
        ))}
    </div>
  );
}

  export default GridArray
