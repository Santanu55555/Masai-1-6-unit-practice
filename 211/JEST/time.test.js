import timeconvertion from "./time";

import {describe,test,expect} from '@jest/globals'

describe("Test time convertion",()=>{
    test("ok",()=>{
        expect(timeconvertion(5200)).toBe("5 seconds")
    })
})