import App from "./App";

describe("",()=>{
    it("should render",()=>{
        render(<App></App>)
        let h3=screen.getByText("Counter 0")
        expect(h3).toBeInTheDocument

    })
    it("shouuld have buttons",()=>{
        let btn1=screen.getBytext("add")
        expect(btn1).toBeInTheDocument
        let btn2=screen.getBytext("reduce")
        expect(btn2).toBeInTheDocument
    })
})