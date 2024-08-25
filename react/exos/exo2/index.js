const Element = (classes, handleClick) => {
  return (
    <div className="container">
      <h1 className={classes} onClick={handleClick}>
        Hello world !
      </h1>
    </div>
  );
};

<Element classes="button blue" handleClick={() => console.log("hello");}/>