import React from 'react'
interface Blog{
    name: string;
    path:string;
    bgcolor:string;
}

function BlogCard(data:Blog) {
    const{name,bgcolor}=data;
  return (
    <div style={{
        width:'300px',
        height:'400px',
        background:bgcolor,
        display:"flex",
        justifyContent:"centre",
       alignItems: "center",
      // textAlign:"center",
      // textAnchor:"middle",
      // alignContent:"center"
    }}><p style={{
        color:"white",
        fontSize:"15px",
       // textAlign:"center"
    }}>{name}</p>
    </div>
  )
}

export default BlogCard