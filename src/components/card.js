const Card = (props) => {
    return ( 
        <div className="card" onClick={props.method}>
          {props.caption}
        </div> );
}
 
export default Card;