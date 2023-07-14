import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import {  useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import { processGeojson } from "kepler.gl/processors";
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
      `${propsMapName}`
    );
    const data = await response.json();
    return processGeojson(data);
  });
  useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "test",
              id: "test"
            },
            data
          },
          option: {
            centerMap: true,
            readOnly: true
          },
          config: {}
        })
      );
      console.log(data)
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
             Map file URL: {propsMapName}
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