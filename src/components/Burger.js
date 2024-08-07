import React, {Component} from 'react';
import './BurgerStyle.css';
export default class Burger extends Component{
    state = {
        lettuce : 0,
        tomato : 0,
        cheese : 0,
        meat : 0
    }
    placeOrder = () =>{
        this.calCost();
        window.alert("Order placed successfully");
    }
    addRemoveIngredient = (action,ingredient) =>{
        let{
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;
        let stateValue;
        switch(ingredient){
            case 'lettuce' : {
                stateValue = lettuce;
                //l++;
                break;
            }
            case 'tomato' : {
                stateValue = tomato;
                //t++;
                break;
            }
            case 'cheese' : {
                stateValue = cheese;
                //c++;
                break;
            }
            case 'meat' : {
                stateValue = meat;
                //m++;
                break;
            }
            default : break;
        }
        if (action === 'add'){
            stateValue = stateValue +1;
        }
        else{
            stateValue = stateValue -1;
        }
        this.setState({
            [ingredient]:stateValue >=0 ? stateValue:0
        });
    }
    
    
    burgerContent = () => {
        let{
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;
        let burger = [];

        for(let i=0;i<lettuce;i++){
            //window.alert(lettuce);
            burger.push(<div key = {burger.length} className='lettuceSide'></div>)
        }

        for(let i=0;i<tomato;i++){
            burger.push(<div key = {burger.length} className='tomatoSide'></div>)
        }

        for(let i=0;i<cheese;i++){
            burger.push(<div key = {burger.length} className='cheeseSide'></div>)
        }

        for(let i=0;i<meat;i++){
            burger.push(<div key = {burger.length} className='meatSide'></div>)
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;

    }
    calCost = () =>{
        let{
            lettuce,
            tomato,
            cheese,
            meat
        }=this.state;
        let tot = lettuce*20 + tomato*15 + 50 + cheese*35 + meat*40;
        window.alert("Total cost : " + tot);
    }
    render() {
        return (
            <>
                <div className = "burgerIngredients">
                    <div className='topSide'></div>
                        {this.burgerContent()}
                    <div className='bottomSide'></div>
                </div>
                <div className = "Ingredients">
                    <p> Lettuce </p>
                    <div className='ingrBtns'>
                        <button onClick={()=> this.addRemoveIngredient('add','lettuce')} className='ingrBtn'>Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','lettuce')} className='ingrBtn'>Remove</button>
                    </div>                  
                    <p> Tomato </p>
                    <div className='ingrBtns'>
                        <button onClick={()=> this.addRemoveIngredient('add','tomato')} className='ingrBtn'>Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','tomato')} className='ingrBtn'>Remove</button>
                    </div>
                    <p> Cheese </p>
                    <div className='ingrBtns'>
                        <button onClick={()=> this.addRemoveIngredient('add','cheese')}className='ingrBtn'>Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','cheese')}className='ingrBtn'>Remove</button>
                    </div>
                    <p> Meat </p>
                    <div className='ingrBtns'>
                        <button onClick={()=> this.addRemoveIngredient('add','meat')}className='ingrBtn'>Add</button>
                        <button onClick={()=> this.addRemoveIngredient('remove','meat')}className='ingrBtn'>Remove</button>
                    </div>
                    <div>
                        <button onClick ={() => this.calCost()} className='calorBtn' >Calculate Cost</button>
                        <button onClick ={() => this.placeOrder()} className ='calorBtn' >Place order</button>
                    </div>

                </div>
            </>
        );
    }
}