const Button = (props) => {
  //  Write your code here.
  const { styling, text } = props;
  return <button className={styling}> {text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1>Social Buttons</h1>
    <div className="btn-cont">
      <Button styling="button-l" text="Like" />
      <Button styling="button-c" text="Comment" />
      <Button styling="button-s" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
