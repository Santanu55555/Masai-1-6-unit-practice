import React from "react";

const Slider = ({ slider }) => {
  const [val, setval] = React.useState(0);

  return (
    <div >
      {slider.map((el, id) => {
        if (id === val) {
          return (
            <div key={id}>
              <h3 data-testid="question">{el.question}</h3>

              <p data-testid="answer">{el.answer}</p>
            </div>
          );
        }

        return false;
      })}
      <div>
        <button
          data-testid="next_btn"
          disabled={val === slider.length - 1 ? true : false}
          onClick={() => setval(val + 1)}
        >
          Next
        </button>

        <button
          data-testid="prev_btn"
          disabled={val === 0 ? true : false}
          onClick={() => setval(val - 1)}
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default Slider;
