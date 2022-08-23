import { render, screen, fireEvent } from '@testing-library/react';


import Slider from './Slider'

const slider=[
    {
      id:1,
      question:'I am question 1',
      answer:'I am answer 1',
    },
    {
      id:2,
      question:'I am question 2',
      answer:'I am answer 2',
    }
   
  ]
it('should render correctly',()=>{
    render(<Slider slider={slider}/>)
})

it("slider component",function(){

    render(<Slider slider={slider}/>)
    let question = screen.getByTestId("question");
    let answer = screen.getByTestId("answer");
    expect(question).toBeInTheDocument();
    expect(answer).toBeInTheDocument();
});
it("slider component with prev button",function(){

    render(<Slider slider={slider}/>)
    let prevbtn = screen.getByTestId("prev_btn");
    expect(prevbtn).toHaveTextContent('Prev')
});
it("slider component with Next button",function(){

    render(<Slider slider={slider}/>)
    let nextbtn = screen.getByTestId("next_btn");
    expect(nextbtn).toHaveTextContent('Next')
});
it("slider  with Next button",function(){

  render(<Slider slider={slider}/>)
  let nextbtn = screen.getByTestId("next_btn");
  fireEvent.click(nextbtn)
  let question = screen.getByTestId("question");
  let answer = screen.getByTestId("answer");
  expect(question).toHaveTextContent("I am question 2");
  expect(answer).toHaveTextContent("I am answer 2");
  // let prevbtn = screen.getByTestId("prev_btn");
  // fireEvent.click(prevbtn)
  // expect(question).toHaveTextContent("I am question 1");
  // expect(answer).toHaveTextContent("I am answer 1");
});

it("slider   Next button",function(){

  render(<Slider slider={slider}/>)
  let nextbtn = screen.getByTestId("next_btn");
  let question = screen.getByTestId("question");
  let answer = screen.getByTestId("answer");
  // expect(question).toHaveTextContent("I am question 2");
  // expect(answer).toHaveTextContent("I am answer 2");
  let prevbtn = screen.getByTestId("prev_btn");
  fireEvent.click(nextbtn)
  fireEvent.click(prevbtn)
  expect(question).toHaveTextContent("I am question 1");
  expect(answer).toHaveTextContent("I am answer 1");
});

