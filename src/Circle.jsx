const Circle =(props) => {

   const circleStyle ={
    width:prop.size,
    height: "100px",
    borderRadius:"9999px",
     backgroundColor: props.bg,};
    
    
    
    return <div style={circleStyle}></div>;
};

export default Circle;