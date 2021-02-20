/*//import React from "React"
import ReactDOM from "React-dom"
import Button from './Button'
import ComponentA from '.ComponentA'
import ComponentB from '.ComponentB'
import "./styles.css"
///*
function soma(a, b) {
    alert(a +b)
}
function app (){
    return(
        <div className="app">
        Hello World!
        <Button onClick= {()=>soma (10,20)} name= "Bruno Carneiro" />
        <ComponentA>
            <ComponentB>
                <Button onClick= {()=>soma(40,20)} name= "alice Carneiro"/>
            </ComponentB>
        </ComponentA>
        </div>
           )
}


//const element = 'Digital innovation'
const element2 = <h1>Aprendizado de Programação comm ReactJS</h1>

function app(){
    return(
    <div>
        {element}
        {element2}
        </div>
        )    //

const rootElement = document.getElementById("root")
ReactDOM.render(<app/>, rootElement)
------------------------------------------------------------*/
import React, {Component} from "React"
import ReactDOM from "React-dom"
import "./styles.css"

class App extends Component {
    consstructor(props){
        super(props)
        this.state = {
            clock: 1000,
            glass: 'água'

        }
    }
    AlterarGlass = () =>{
        this.setState({
            glass:'refrigerante'
        })
        //this.State.glass = 'refrigerante'
    }
    render () {
    const {clock, glass} = this.state
    return (
        <div>
            <h1>Relógio</h1>
            <button onClick= {AlterarGlass()}>{Copo}</button> 
         </div>
    )
}
}
