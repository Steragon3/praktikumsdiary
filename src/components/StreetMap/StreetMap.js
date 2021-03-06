import React, {useRef } from 'react';
import "leaflet/dist/leaflet.css"
import "./index.css"
import styles from './StreetMap.module.scss';
import {MapContainer, TileLayer, Popup, Marker } from "react-leaflet"
import map from "./map-provider"
import { iconPerson, FHLogo } from './POIIcon.js';


const StreetMap = ({companies}) => {
  const center = { lat: 47.724040, lng: 13.086170}
  const ZOOM_LEVEL = 12
  const mapRef = useRef()
  const position = [47.724040,13.086170]

  return(
    <div className={styles.StreetMap}>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer url={map.maptiler.url} attribution={map.maptiler.attribution}/>
          <Marker position={position} icon={FHLogo}><Popup className={styles.Popup}><h2>FH-Salzburg</h2><p>Campus Urstein</p></Popup></Marker>
            {companies.map((companie,index)=>{
              return (<Marker key={index} position={companie.position} icon={iconPerson}>
               <Popup className={styles.Popup}><h2>{companie.name}</h2>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>public</i><a target="_blank" href={companie.website}>{companie.website}</a></span></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>work</i><span>{companie.departments.join(', ')}</span></span></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>paid</i><span>{companie.salary}</span></span></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>emoji_emotions</i><span>{companie.satisfaction}</span></span></p>
                  <p className={styles.p}><span className={styles.text }><i className={styles.icons + " material-icons"}>description</i> {companie.links.map((e, index)=>{return <a key={index} target='_blank' href={e}>{e}, </a>})}</span></p>
                </Popup>
              </Marker>)
            })}
        </MapContainer>
    </div>
  )};

StreetMap.propTypes = {};

StreetMap.defaultProps = {};

export default StreetMap;
