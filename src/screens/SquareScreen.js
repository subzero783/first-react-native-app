import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number};
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch(action.colorToChange){
        case 'red':
            
            // never going to do: 
            //state.red = state.red - 15;

            return {...state, red: state.red + action.amount}

        case 'green':

            return {...state, green: state.green + action.amount}

        case 'blue':

            return {...state, blue: state.blue + action.amount}

        default: 

            return state;
    }   
};

const SquareScreen = () => {


    const [state, dispatch] = useReducer(reducer, {
        red: 0, 
        green: 0, 
        blue: 0
    });

    return (
        <View>
            <ColorCounter
                onIncrease={()=>
                    
                }
                onDecrease={()=>
                    
                }
                color="Red" 
            />
            <ColorCounter 
                onIncrease={()=>
                    
                }
                onDecrease={()=>
                        
                }
                color="Green" 
                />
            <ColorCounter 
                onIncrease={()=>
                    
                }
                onDecrease={()=>
                    
                }
                color="Blue" 
            />
            <View 
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
