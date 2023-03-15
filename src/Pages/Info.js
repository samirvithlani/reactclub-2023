import React from 'react'
import { useParams } from 'react-router-dom';

export const Info = () => {
    var id = useParams().id;
  return (
    <div>Info
        <h1>{id}</h1>
    </div>
  )
}
