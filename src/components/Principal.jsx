import React from 'react'

function Principal(props) {
    let {children} = props;
  return (
    <>
    <div>Pokédex</div>

    {children}
    </>
  )
}

export default Principal