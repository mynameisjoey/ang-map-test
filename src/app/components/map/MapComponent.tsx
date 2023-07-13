import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import {  useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";

export interface IMyComponentProps {
  counter: number;
  onClick?: () => void;
  mapName: string;
}

export const MapComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(0);
  const dispatch = useDispatch();
  const { data } = useSwr("covid", async () => {
    console.log(propsMapName)
  const response = await fetch(
      "https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json"
    );
    const data = await response.json();
    return data;
  });
  useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "COVID-19",
              id: "covid19"
            },
            data
          },
          option: {
            centerMap: true,
            readOnly: false
          },
          config: {}
        })
      );
    }
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 2500);
    console.log(process.env.REACT_APP_MAPBOX_API, 'pk.eyJ1IjoianJvbW85NSIsImEiOiJjbGQ5MXQ4YzEwNGxvM3ZtbWdnN216MDFnIn0.MnnLjBG2Z0CgRINOCOS4XQ')
    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  }, [dispatch, data]);

  const {counter: propsCounter, onClick, mapName: propsMapName} = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
        <div>
             {/* Props counter: {propsCounter} */}
             Map name: {propsMapName}
          {/* <button type="button" onClick={handleClick}>click to increase</button> */}
        </div>
        {/* <div>State counter: {stateCounter}</div> */}
        <KeplerGl
        id="covid"
        mapboxApiAccessToken='pk.eyJ1IjoianJvbW85NSIsImEiOiJjbGQ5MXQ4YzEwNGxvM3ZtbWdnN216MDFnIn0.MnnLjBG2Z0CgRINOCOS4XQ'
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
    
  );
};