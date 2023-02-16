import React from 'react'

const Filtre = ({setSearch}) => {
  return (
    <div>
          <input
                placeholder="Search"
                type="text"
                style={{ width: "100%", height: "30px", margin: "10px 0",textAlign:"center" }}
                onChange={(e) => (setSearch(e.target.value))}
            />
    </div>
  )
}

export default Filtre
