import React from 'react'
//import SearchBar from './SearchBar'



function Principal(props) {
    let {children} = props;

  return (
    <>
   

   
<nav className="navbar navbar-inverse">
   <h1 className="tituloprincipal"> Pokédex </h1>   
  <div className="container-fluid">
    <div className="navbar-header">
     {/* <SearchBar url={url}>

     </SearchBar> */}
    </div>
  
    <form className="navbar-form navbar">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Enter name or id" name="search" />
      </div>
      
      <button type="button" className="btn btn-default" name="searchbt">Search</button>
    </form>
    
     <ul className="nav navbar-nav navbar-right">
      <li> <p href="#"><span className="glyphicon glyphicon-log-out"></span> Log Out</p></li>
    </ul>
  </div>
</nav>

    {children}

    
    </>
  )
}

export default Principal