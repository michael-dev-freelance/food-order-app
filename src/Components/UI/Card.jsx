const Card = (props) => {
  return (
    <div className="p-4 rounded-14px bg-white shadow-card">
      {props.children}
    </div>
  );
};
export default Card;
